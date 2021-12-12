goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37801 = arguments.length;
var i__4865__auto___37803 = (0);
while(true){
if((i__4865__auto___37803 < len__4864__auto___37801)){
args__4870__auto__.push((arguments[i__4865__auto___37803]));

var G__37804 = (i__4865__auto___37803 + (1));
i__4865__auto___37803 = G__37804;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37583){
var G__37584 = cljs.core.first(seq37583);
var seq37583__$1 = cljs.core.next(seq37583);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37584,seq37583__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37588 = cljs.core.seq(sources);
var chunk__37589 = null;
var count__37590 = (0);
var i__37591 = (0);
while(true){
if((i__37591 < count__37590)){
var map__37607 = chunk__37589.cljs$core$IIndexed$_nth$arity$2(null,i__37591);
var map__37607__$1 = cljs.core.__destructure_map(map__37607);
var src = map__37607__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37607__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37607__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37607__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37607__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37608){var e_37812 = e37608;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37812);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37812.message)].join('')));
}

var G__37813 = seq__37588;
var G__37814 = chunk__37589;
var G__37815 = count__37590;
var G__37816 = (i__37591 + (1));
seq__37588 = G__37813;
chunk__37589 = G__37814;
count__37590 = G__37815;
i__37591 = G__37816;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37588);
if(temp__5753__auto__){
var seq__37588__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37588__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37588__$1);
var G__37817 = cljs.core.chunk_rest(seq__37588__$1);
var G__37818 = c__4679__auto__;
var G__37819 = cljs.core.count(c__4679__auto__);
var G__37820 = (0);
seq__37588 = G__37817;
chunk__37589 = G__37818;
count__37590 = G__37819;
i__37591 = G__37820;
continue;
} else {
var map__37609 = cljs.core.first(seq__37588__$1);
var map__37609__$1 = cljs.core.__destructure_map(map__37609);
var src = map__37609__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37609__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37609__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37609__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37609__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37610){var e_37824 = e37610;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37824);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37824.message)].join('')));
}

var G__37825 = cljs.core.next(seq__37588__$1);
var G__37826 = null;
var G__37827 = (0);
var G__37828 = (0);
seq__37588 = G__37825;
chunk__37589 = G__37826;
count__37590 = G__37827;
i__37591 = G__37828;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37611 = cljs.core.seq(js_requires);
var chunk__37612 = null;
var count__37613 = (0);
var i__37614 = (0);
while(true){
if((i__37614 < count__37613)){
var js_ns = chunk__37612.cljs$core$IIndexed$_nth$arity$2(null,i__37614);
var require_str_37829 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37829);


var G__37830 = seq__37611;
var G__37831 = chunk__37612;
var G__37832 = count__37613;
var G__37833 = (i__37614 + (1));
seq__37611 = G__37830;
chunk__37612 = G__37831;
count__37613 = G__37832;
i__37614 = G__37833;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37611);
if(temp__5753__auto__){
var seq__37611__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37611__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37611__$1);
var G__37834 = cljs.core.chunk_rest(seq__37611__$1);
var G__37835 = c__4679__auto__;
var G__37836 = cljs.core.count(c__4679__auto__);
var G__37837 = (0);
seq__37611 = G__37834;
chunk__37612 = G__37835;
count__37613 = G__37836;
i__37614 = G__37837;
continue;
} else {
var js_ns = cljs.core.first(seq__37611__$1);
var require_str_37839 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37839);


var G__37840 = cljs.core.next(seq__37611__$1);
var G__37841 = null;
var G__37842 = (0);
var G__37843 = (0);
seq__37611 = G__37840;
chunk__37612 = G__37841;
count__37613 = G__37842;
i__37614 = G__37843;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37619){
var map__37620 = p__37619;
var map__37620__$1 = cljs.core.__destructure_map(map__37620);
var msg = map__37620__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37620__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37620__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37621(s__37622){
return (new cljs.core.LazySeq(null,(function (){
var s__37622__$1 = s__37622;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__37622__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__37627 = cljs.core.first(xs__6308__auto__);
var map__37627__$1 = cljs.core.__destructure_map(map__37627);
var src = map__37627__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37627__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37627__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__37622__$1,map__37627,map__37627__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37620,map__37620__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37621_$_iter__37623(s__37624){
return (new cljs.core.LazySeq(null,((function (s__37622__$1,map__37627,map__37627__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37620,map__37620__$1,msg,info,reload_info){
return (function (){
var s__37624__$1 = s__37624;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__37624__$1);
if(temp__5753__auto____$1){
var s__37624__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37624__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__37624__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__37626 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__37625 = (0);
while(true){
if((i__37625 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__37625);
cljs.core.chunk_append(b__37626,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37864 = (i__37625 + (1));
i__37625 = G__37864;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37626),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37621_$_iter__37623(cljs.core.chunk_rest(s__37624__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37626),null);
}
} else {
var warning = cljs.core.first(s__37624__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37621_$_iter__37623(cljs.core.rest(s__37624__$2)));
}
} else {
return null;
}
break;
}
});})(s__37622__$1,map__37627,map__37627__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37620,map__37620__$1,msg,info,reload_info))
,null,null));
});})(s__37622__$1,map__37627,map__37627__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37620,map__37620__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37621(cljs.core.rest(s__37622__$1)));
} else {
var G__37872 = cljs.core.rest(s__37622__$1);
s__37622__$1 = G__37872;
continue;
}
} else {
var G__37873 = cljs.core.rest(s__37622__$1);
s__37622__$1 = G__37873;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37628_37874 = cljs.core.seq(warnings);
var chunk__37629_37875 = null;
var count__37630_37876 = (0);
var i__37631_37877 = (0);
while(true){
if((i__37631_37877 < count__37630_37876)){
var map__37635_37878 = chunk__37629_37875.cljs$core$IIndexed$_nth$arity$2(null,i__37631_37877);
var map__37635_37879__$1 = cljs.core.__destructure_map(map__37635_37878);
var w_37880 = map__37635_37879__$1;
var msg_37881__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37635_37879__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37882 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37635_37879__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37635_37879__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37884 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37635_37879__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37884)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37882),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37883),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37881__$1)].join(''));


var G__37885 = seq__37628_37874;
var G__37886 = chunk__37629_37875;
var G__37887 = count__37630_37876;
var G__37888 = (i__37631_37877 + (1));
seq__37628_37874 = G__37885;
chunk__37629_37875 = G__37886;
count__37630_37876 = G__37887;
i__37631_37877 = G__37888;
continue;
} else {
var temp__5753__auto___37889 = cljs.core.seq(seq__37628_37874);
if(temp__5753__auto___37889){
var seq__37628_37890__$1 = temp__5753__auto___37889;
if(cljs.core.chunked_seq_QMARK_(seq__37628_37890__$1)){
var c__4679__auto___37891 = cljs.core.chunk_first(seq__37628_37890__$1);
var G__37892 = cljs.core.chunk_rest(seq__37628_37890__$1);
var G__37893 = c__4679__auto___37891;
var G__37894 = cljs.core.count(c__4679__auto___37891);
var G__37895 = (0);
seq__37628_37874 = G__37892;
chunk__37629_37875 = G__37893;
count__37630_37876 = G__37894;
i__37631_37877 = G__37895;
continue;
} else {
var map__37636_37896 = cljs.core.first(seq__37628_37890__$1);
var map__37636_37897__$1 = cljs.core.__destructure_map(map__37636_37896);
var w_37898 = map__37636_37897__$1;
var msg_37899__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37636_37897__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37636_37897__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37901 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37636_37897__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37902 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37636_37897__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37902)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37900),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37901),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37899__$1)].join(''));


var G__37905 = cljs.core.next(seq__37628_37890__$1);
var G__37906 = null;
var G__37907 = (0);
var G__37908 = (0);
seq__37628_37874 = G__37905;
chunk__37629_37875 = G__37906;
count__37630_37876 = G__37907;
i__37631_37877 = G__37908;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37618_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37618_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37638){
var map__37639 = p__37638;
var map__37639__$1 = cljs.core.__destructure_map(map__37639);
var msg = map__37639__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37639__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37640 = cljs.core.seq(updates);
var chunk__37643 = null;
var count__37644 = (0);
var i__37645 = (0);
while(true){
if((i__37645 < count__37644)){
var path = chunk__37643.cljs$core$IIndexed$_nth$arity$2(null,i__37645);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37680_37910 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37684_37911 = null;
var count__37685_37912 = (0);
var i__37686_37913 = (0);
while(true){
if((i__37686_37913 < count__37685_37912)){
var node_37915 = chunk__37684_37911.cljs$core$IIndexed$_nth$arity$2(null,i__37686_37913);
if(cljs.core.not(node_37915.shadow$old)){
var path_match_37916 = shadow.cljs.devtools.client.browser.match_paths(node_37915.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37916)){
var new_link_37917 = (function (){var G__37693 = node_37915.cloneNode(true);
G__37693.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37916),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37693;
})();
(node_37915.shadow$old = true);

(new_link_37917.onload = ((function (seq__37680_37910,chunk__37684_37911,count__37685_37912,i__37686_37913,seq__37640,chunk__37643,count__37644,i__37645,new_link_37917,path_match_37916,node_37915,path,map__37639,map__37639__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37915);
});})(seq__37680_37910,chunk__37684_37911,count__37685_37912,i__37686_37913,seq__37640,chunk__37643,count__37644,i__37645,new_link_37917,path_match_37916,node_37915,path,map__37639,map__37639__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37916], 0));

goog.dom.insertSiblingAfter(new_link_37917,node_37915);


var G__37918 = seq__37680_37910;
var G__37919 = chunk__37684_37911;
var G__37920 = count__37685_37912;
var G__37921 = (i__37686_37913 + (1));
seq__37680_37910 = G__37918;
chunk__37684_37911 = G__37919;
count__37685_37912 = G__37920;
i__37686_37913 = G__37921;
continue;
} else {
var G__37922 = seq__37680_37910;
var G__37923 = chunk__37684_37911;
var G__37924 = count__37685_37912;
var G__37925 = (i__37686_37913 + (1));
seq__37680_37910 = G__37922;
chunk__37684_37911 = G__37923;
count__37685_37912 = G__37924;
i__37686_37913 = G__37925;
continue;
}
} else {
var G__37926 = seq__37680_37910;
var G__37927 = chunk__37684_37911;
var G__37928 = count__37685_37912;
var G__37929 = (i__37686_37913 + (1));
seq__37680_37910 = G__37926;
chunk__37684_37911 = G__37927;
count__37685_37912 = G__37928;
i__37686_37913 = G__37929;
continue;
}
} else {
var temp__5753__auto___37930 = cljs.core.seq(seq__37680_37910);
if(temp__5753__auto___37930){
var seq__37680_37931__$1 = temp__5753__auto___37930;
if(cljs.core.chunked_seq_QMARK_(seq__37680_37931__$1)){
var c__4679__auto___37932 = cljs.core.chunk_first(seq__37680_37931__$1);
var G__37933 = cljs.core.chunk_rest(seq__37680_37931__$1);
var G__37934 = c__4679__auto___37932;
var G__37935 = cljs.core.count(c__4679__auto___37932);
var G__37936 = (0);
seq__37680_37910 = G__37933;
chunk__37684_37911 = G__37934;
count__37685_37912 = G__37935;
i__37686_37913 = G__37936;
continue;
} else {
var node_37937 = cljs.core.first(seq__37680_37931__$1);
if(cljs.core.not(node_37937.shadow$old)){
var path_match_37938 = shadow.cljs.devtools.client.browser.match_paths(node_37937.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37938)){
var new_link_37939 = (function (){var G__37697 = node_37937.cloneNode(true);
G__37697.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37938),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37697;
})();
(node_37937.shadow$old = true);

(new_link_37939.onload = ((function (seq__37680_37910,chunk__37684_37911,count__37685_37912,i__37686_37913,seq__37640,chunk__37643,count__37644,i__37645,new_link_37939,path_match_37938,node_37937,seq__37680_37931__$1,temp__5753__auto___37930,path,map__37639,map__37639__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37937);
});})(seq__37680_37910,chunk__37684_37911,count__37685_37912,i__37686_37913,seq__37640,chunk__37643,count__37644,i__37645,new_link_37939,path_match_37938,node_37937,seq__37680_37931__$1,temp__5753__auto___37930,path,map__37639,map__37639__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37938], 0));

goog.dom.insertSiblingAfter(new_link_37939,node_37937);


var G__37940 = cljs.core.next(seq__37680_37931__$1);
var G__37941 = null;
var G__37942 = (0);
var G__37943 = (0);
seq__37680_37910 = G__37940;
chunk__37684_37911 = G__37941;
count__37685_37912 = G__37942;
i__37686_37913 = G__37943;
continue;
} else {
var G__37944 = cljs.core.next(seq__37680_37931__$1);
var G__37945 = null;
var G__37946 = (0);
var G__37947 = (0);
seq__37680_37910 = G__37944;
chunk__37684_37911 = G__37945;
count__37685_37912 = G__37946;
i__37686_37913 = G__37947;
continue;
}
} else {
var G__37948 = cljs.core.next(seq__37680_37931__$1);
var G__37949 = null;
var G__37950 = (0);
var G__37951 = (0);
seq__37680_37910 = G__37948;
chunk__37684_37911 = G__37949;
count__37685_37912 = G__37950;
i__37686_37913 = G__37951;
continue;
}
}
} else {
}
}
break;
}


var G__37952 = seq__37640;
var G__37953 = chunk__37643;
var G__37954 = count__37644;
var G__37955 = (i__37645 + (1));
seq__37640 = G__37952;
chunk__37643 = G__37953;
count__37644 = G__37954;
i__37645 = G__37955;
continue;
} else {
var G__37956 = seq__37640;
var G__37957 = chunk__37643;
var G__37958 = count__37644;
var G__37959 = (i__37645 + (1));
seq__37640 = G__37956;
chunk__37643 = G__37957;
count__37644 = G__37958;
i__37645 = G__37959;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37640);
if(temp__5753__auto__){
var seq__37640__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37640__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37640__$1);
var G__37960 = cljs.core.chunk_rest(seq__37640__$1);
var G__37961 = c__4679__auto__;
var G__37962 = cljs.core.count(c__4679__auto__);
var G__37963 = (0);
seq__37640 = G__37960;
chunk__37643 = G__37961;
count__37644 = G__37962;
i__37645 = G__37963;
continue;
} else {
var path = cljs.core.first(seq__37640__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37699_37964 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37703_37965 = null;
var count__37704_37966 = (0);
var i__37705_37967 = (0);
while(true){
if((i__37705_37967 < count__37704_37966)){
var node_37968 = chunk__37703_37965.cljs$core$IIndexed$_nth$arity$2(null,i__37705_37967);
if(cljs.core.not(node_37968.shadow$old)){
var path_match_37969 = shadow.cljs.devtools.client.browser.match_paths(node_37968.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37969)){
var new_link_37970 = (function (){var G__37713 = node_37968.cloneNode(true);
G__37713.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37969),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37713;
})();
(node_37968.shadow$old = true);

(new_link_37970.onload = ((function (seq__37699_37964,chunk__37703_37965,count__37704_37966,i__37705_37967,seq__37640,chunk__37643,count__37644,i__37645,new_link_37970,path_match_37969,node_37968,path,seq__37640__$1,temp__5753__auto__,map__37639,map__37639__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37968);
});})(seq__37699_37964,chunk__37703_37965,count__37704_37966,i__37705_37967,seq__37640,chunk__37643,count__37644,i__37645,new_link_37970,path_match_37969,node_37968,path,seq__37640__$1,temp__5753__auto__,map__37639,map__37639__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37969], 0));

goog.dom.insertSiblingAfter(new_link_37970,node_37968);


var G__37971 = seq__37699_37964;
var G__37972 = chunk__37703_37965;
var G__37973 = count__37704_37966;
var G__37974 = (i__37705_37967 + (1));
seq__37699_37964 = G__37971;
chunk__37703_37965 = G__37972;
count__37704_37966 = G__37973;
i__37705_37967 = G__37974;
continue;
} else {
var G__37975 = seq__37699_37964;
var G__37976 = chunk__37703_37965;
var G__37977 = count__37704_37966;
var G__37978 = (i__37705_37967 + (1));
seq__37699_37964 = G__37975;
chunk__37703_37965 = G__37976;
count__37704_37966 = G__37977;
i__37705_37967 = G__37978;
continue;
}
} else {
var G__37979 = seq__37699_37964;
var G__37980 = chunk__37703_37965;
var G__37981 = count__37704_37966;
var G__37982 = (i__37705_37967 + (1));
seq__37699_37964 = G__37979;
chunk__37703_37965 = G__37980;
count__37704_37966 = G__37981;
i__37705_37967 = G__37982;
continue;
}
} else {
var temp__5753__auto___37983__$1 = cljs.core.seq(seq__37699_37964);
if(temp__5753__auto___37983__$1){
var seq__37699_37984__$1 = temp__5753__auto___37983__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37699_37984__$1)){
var c__4679__auto___37985 = cljs.core.chunk_first(seq__37699_37984__$1);
var G__37986 = cljs.core.chunk_rest(seq__37699_37984__$1);
var G__37987 = c__4679__auto___37985;
var G__37988 = cljs.core.count(c__4679__auto___37985);
var G__37989 = (0);
seq__37699_37964 = G__37986;
chunk__37703_37965 = G__37987;
count__37704_37966 = G__37988;
i__37705_37967 = G__37989;
continue;
} else {
var node_37990 = cljs.core.first(seq__37699_37984__$1);
if(cljs.core.not(node_37990.shadow$old)){
var path_match_37991 = shadow.cljs.devtools.client.browser.match_paths(node_37990.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37991)){
var new_link_37992 = (function (){var G__37717 = node_37990.cloneNode(true);
G__37717.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37991),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37717;
})();
(node_37990.shadow$old = true);

(new_link_37992.onload = ((function (seq__37699_37964,chunk__37703_37965,count__37704_37966,i__37705_37967,seq__37640,chunk__37643,count__37644,i__37645,new_link_37992,path_match_37991,node_37990,seq__37699_37984__$1,temp__5753__auto___37983__$1,path,seq__37640__$1,temp__5753__auto__,map__37639,map__37639__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37990);
});})(seq__37699_37964,chunk__37703_37965,count__37704_37966,i__37705_37967,seq__37640,chunk__37643,count__37644,i__37645,new_link_37992,path_match_37991,node_37990,seq__37699_37984__$1,temp__5753__auto___37983__$1,path,seq__37640__$1,temp__5753__auto__,map__37639,map__37639__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37991], 0));

goog.dom.insertSiblingAfter(new_link_37992,node_37990);


var G__37993 = cljs.core.next(seq__37699_37984__$1);
var G__37994 = null;
var G__37995 = (0);
var G__37996 = (0);
seq__37699_37964 = G__37993;
chunk__37703_37965 = G__37994;
count__37704_37966 = G__37995;
i__37705_37967 = G__37996;
continue;
} else {
var G__37997 = cljs.core.next(seq__37699_37984__$1);
var G__37998 = null;
var G__37999 = (0);
var G__38000 = (0);
seq__37699_37964 = G__37997;
chunk__37703_37965 = G__37998;
count__37704_37966 = G__37999;
i__37705_37967 = G__38000;
continue;
}
} else {
var G__38001 = cljs.core.next(seq__37699_37984__$1);
var G__38002 = null;
var G__38003 = (0);
var G__38004 = (0);
seq__37699_37964 = G__38001;
chunk__37703_37965 = G__38002;
count__37704_37966 = G__38003;
i__37705_37967 = G__38004;
continue;
}
}
} else {
}
}
break;
}


var G__38005 = cljs.core.next(seq__37640__$1);
var G__38006 = null;
var G__38007 = (0);
var G__38008 = (0);
seq__37640 = G__38005;
chunk__37643 = G__38006;
count__37644 = G__38007;
i__37645 = G__38008;
continue;
} else {
var G__38009 = cljs.core.next(seq__37640__$1);
var G__38010 = null;
var G__38011 = (0);
var G__38012 = (0);
seq__37640 = G__38009;
chunk__37643 = G__38010;
count__37644 = G__38011;
i__37645 = G__38012;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37718){
var map__37719 = p__37718;
var map__37719__$1 = cljs.core.__destructure_map(map__37719);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37719__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37720){
var map__37721 = p__37720;
var map__37721__$1 = cljs.core.__destructure_map(map__37721);
var _ = map__37721__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37721__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37725,done,error){
var map__37726 = p__37725;
var map__37726__$1 = cljs.core.__destructure_map(map__37726);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37726__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37730,done,error){
var map__37731 = p__37730;
var map__37731__$1 = cljs.core.__destructure_map(map__37731);
var msg = map__37731__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37731__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37731__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37731__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37732){
var map__37733 = p__37732;
var map__37733__$1 = cljs.core.__destructure_map(map__37733);
var src = map__37733__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37733__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37735 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37735) : done.call(null,G__37735));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37736){
var map__37737 = p__37736;
var map__37737__$1 = cljs.core.__destructure_map(map__37737);
var msg__$1 = map__37737__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37737__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37738){var ex = e37738;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37741){
var map__37742 = p__37741;
var map__37742__$1 = cljs.core.__destructure_map(map__37742);
var env = map__37742__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37742__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__37757){
var map__37758 = p__37757;
var map__37758__$1 = cljs.core.__destructure_map(map__37758);
var msg = map__37758__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37758__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37772){
var map__37775 = p__37772;
var map__37775__$1 = cljs.core.__destructure_map(map__37775);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37775__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37775__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37783){
var map__37784 = p__37783;
var map__37784__$1 = cljs.core.__destructure_map(map__37784);
var svc = map__37784__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37784__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
