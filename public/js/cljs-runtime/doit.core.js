goog.provide('doit.core');
doit.core.todos = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"Pasta",new cljs.core.Keyword(null,"color","color",1011675173),"red"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"desc","desc",2093485764),"Hotdog",new cljs.core.Keyword(null,"color","color",1011675173),"green"], null)], null));
doit.core.todo_item = (function doit$core$todo_item(desc,color){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null),desc], null);
});
doit.core.home_page = (function doit$core$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Welcome to Reagent"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4652__auto__ = (function doit$core$home_page_$_iter__38164(s__38165){
return (new cljs.core.LazySeq(null,(function (){
var s__38165__$1 = s__38165;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__38165__$1);
if(temp__5753__auto__){
var s__38165__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38165__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__38165__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__38167 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__38166 = (0);
while(true){
if((i__38166 < size__4651__auto__)){
var todo = cljs.core._nth(c__4650__auto__,i__38166);
cljs.core.chunk_append(b__38167,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [doit.core.todo_item,new cljs.core.Keyword(null,"desc","desc",2093485764).cljs$core$IFn$_invoke$arity$1(todo),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(todo)], null));

var G__38168 = (i__38166 + (1));
i__38166 = G__38168;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38167),doit$core$home_page_$_iter__38164(cljs.core.chunk_rest(s__38165__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38167),null);
}
} else {
var todo = cljs.core.first(s__38165__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [doit.core.todo_item,new cljs.core.Keyword(null,"desc","desc",2093485764).cljs$core$IFn$_invoke$arity$1(todo),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(todo)], null),doit$core$home_page_$_iter__38164(cljs.core.rest(s__38165__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.deref(doit.core.todos));
})()], null)], null);
});
doit.core.mount_root = (function doit$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doit.core.home_page], null),document.getElementById("app"));
});
doit.core.init_BANG_ = (function doit$core$init_BANG_(){
return doit.core.mount_root();
});
goog.exportSymbol('doit.core.init_BANG_', doit.core.init_BANG_);

//# sourceMappingURL=doit.core.js.map
