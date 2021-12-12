goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32714 = arguments.length;
switch (G__32714) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32735 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32735 = (function (f,blockable,meta32736){
this.f = f;
this.blockable = blockable;
this.meta32736 = meta32736;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32737,meta32736__$1){
var self__ = this;
var _32737__$1 = this;
return (new cljs.core.async.t_cljs$core$async32735(self__.f,self__.blockable,meta32736__$1));
}));

(cljs.core.async.t_cljs$core$async32735.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32737){
var self__ = this;
var _32737__$1 = this;
return self__.meta32736;
}));

(cljs.core.async.t_cljs$core$async32735.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32735.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32735.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32735.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32735.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32736","meta32736",1671407543,null)], null);
}));

(cljs.core.async.t_cljs$core$async32735.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32735.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32735");

(cljs.core.async.t_cljs$core$async32735.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32735");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32735.
 */
cljs.core.async.__GT_t_cljs$core$async32735 = (function cljs$core$async$__GT_t_cljs$core$async32735(f__$1,blockable__$1,meta32736){
return (new cljs.core.async.t_cljs$core$async32735(f__$1,blockable__$1,meta32736));
});

}

return (new cljs.core.async.t_cljs$core$async32735(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32744 = arguments.length;
switch (G__32744) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32747 = arguments.length;
switch (G__32747) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32750 = arguments.length;
switch (G__32750) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34890 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34890) : fn1.call(null,val_34890));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34890) : fn1.call(null,val_34890));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32754 = arguments.length;
switch (G__32754) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___34894 = n;
var x_34895 = (0);
while(true){
if((x_34895 < n__4741__auto___34894)){
(a[x_34895] = x_34895);

var G__34896 = (x_34895 + (1));
x_34895 = G__34896;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32757 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32757 = (function (flag,meta32758){
this.flag = flag;
this.meta32758 = meta32758;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32759,meta32758__$1){
var self__ = this;
var _32759__$1 = this;
return (new cljs.core.async.t_cljs$core$async32757(self__.flag,meta32758__$1));
}));

(cljs.core.async.t_cljs$core$async32757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32759){
var self__ = this;
var _32759__$1 = this;
return self__.meta32758;
}));

(cljs.core.async.t_cljs$core$async32757.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32757.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32757.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32757.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32757.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32758","meta32758",1161900763,null)], null);
}));

(cljs.core.async.t_cljs$core$async32757.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32757.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32757");

(cljs.core.async.t_cljs$core$async32757.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32757");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32757.
 */
cljs.core.async.__GT_t_cljs$core$async32757 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32757(flag__$1,meta32758){
return (new cljs.core.async.t_cljs$core$async32757(flag__$1,meta32758));
});

}

return (new cljs.core.async.t_cljs$core$async32757(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32761 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32761 = (function (flag,cb,meta32762){
this.flag = flag;
this.cb = cb;
this.meta32762 = meta32762;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32763,meta32762__$1){
var self__ = this;
var _32763__$1 = this;
return (new cljs.core.async.t_cljs$core$async32761(self__.flag,self__.cb,meta32762__$1));
}));

(cljs.core.async.t_cljs$core$async32761.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32763){
var self__ = this;
var _32763__$1 = this;
return self__.meta32762;
}));

(cljs.core.async.t_cljs$core$async32761.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32761.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32761.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32761.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32761.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32762","meta32762",-162927370,null)], null);
}));

(cljs.core.async.t_cljs$core$async32761.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32761.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32761");

(cljs.core.async.t_cljs$core$async32761.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32761");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32761.
 */
cljs.core.async.__GT_t_cljs$core$async32761 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32761(flag__$1,cb__$1,meta32762){
return (new cljs.core.async.t_cljs$core$async32761(flag__$1,cb__$1,meta32762));
});

}

return (new cljs.core.async.t_cljs$core$async32761(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32766_SHARP_){
var G__32768 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32766_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32768) : fret.call(null,G__32768));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32767_SHARP_){
var G__32769 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32767_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32769) : fret.call(null,G__32769));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34899 = (i + (1));
i = G__34899;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34900 = arguments.length;
var i__4865__auto___34901 = (0);
while(true){
if((i__4865__auto___34901 < len__4864__auto___34900)){
args__4870__auto__.push((arguments[i__4865__auto___34901]));

var G__34902 = (i__4865__auto___34901 + (1));
i__4865__auto___34901 = G__34902;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32773){
var map__32774 = p__32773;
var map__32774__$1 = cljs.core.__destructure_map(map__32774);
var opts = map__32774__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32771){
var G__32772 = cljs.core.first(seq32771);
var seq32771__$1 = cljs.core.next(seq32771);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32772,seq32771__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32778 = arguments.length;
switch (G__32778) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32622__auto___34908 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32623__auto__ = (function (){var switch__32103__auto__ = (function (state_32804){
var state_val_32805 = (state_32804[(1)]);
if((state_val_32805 === (7))){
var inst_32800 = (state_32804[(2)]);
var state_32804__$1 = state_32804;
var statearr_32807_34909 = state_32804__$1;
(statearr_32807_34909[(2)] = inst_32800);

(statearr_32807_34909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (1))){
var state_32804__$1 = state_32804;
var statearr_32808_34910 = state_32804__$1;
(statearr_32808_34910[(2)] = null);

(statearr_32808_34910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (4))){
var inst_32782 = (state_32804[(7)]);
var inst_32782__$1 = (state_32804[(2)]);
var inst_32784 = (inst_32782__$1 == null);
var state_32804__$1 = (function (){var statearr_32810 = state_32804;
(statearr_32810[(7)] = inst_32782__$1);

return statearr_32810;
})();
if(cljs.core.truth_(inst_32784)){
var statearr_32811_34911 = state_32804__$1;
(statearr_32811_34911[(1)] = (5));

} else {
var statearr_32812_34912 = state_32804__$1;
(statearr_32812_34912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (13))){
var state_32804__$1 = state_32804;
var statearr_32813_34917 = state_32804__$1;
(statearr_32813_34917[(2)] = null);

(statearr_32813_34917[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (6))){
var inst_32782 = (state_32804[(7)]);
var state_32804__$1 = state_32804;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32804__$1,(11),to,inst_32782);
} else {
if((state_val_32805 === (3))){
var inst_32802 = (state_32804[(2)]);
var state_32804__$1 = state_32804;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32804__$1,inst_32802);
} else {
if((state_val_32805 === (12))){
var state_32804__$1 = state_32804;
var statearr_32814_34918 = state_32804__$1;
(statearr_32814_34918[(2)] = null);

(statearr_32814_34918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (2))){
var state_32804__$1 = state_32804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32804__$1,(4),from);
} else {
if((state_val_32805 === (11))){
var inst_32793 = (state_32804[(2)]);
var state_32804__$1 = state_32804;
if(cljs.core.truth_(inst_32793)){
var statearr_32816_34919 = state_32804__$1;
(statearr_32816_34919[(1)] = (12));

} else {
var statearr_32817_34920 = state_32804__$1;
(statearr_32817_34920[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (9))){
var state_32804__$1 = state_32804;
var statearr_32818_34921 = state_32804__$1;
(statearr_32818_34921[(2)] = null);

(statearr_32818_34921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (5))){
var state_32804__$1 = state_32804;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32819_34922 = state_32804__$1;
(statearr_32819_34922[(1)] = (8));

} else {
var statearr_32820_34923 = state_32804__$1;
(statearr_32820_34923[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (14))){
var inst_32798 = (state_32804[(2)]);
var state_32804__$1 = state_32804;
var statearr_32821_34925 = state_32804__$1;
(statearr_32821_34925[(2)] = inst_32798);

(statearr_32821_34925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (10))){
var inst_32790 = (state_32804[(2)]);
var state_32804__$1 = state_32804;
var statearr_32822_34927 = state_32804__$1;
(statearr_32822_34927[(2)] = inst_32790);

(statearr_32822_34927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (8))){
var inst_32787 = cljs.core.async.close_BANG_(to);
var state_32804__$1 = state_32804;
var statearr_32823_34928 = state_32804__$1;
(statearr_32823_34928[(2)] = inst_32787);

(statearr_32823_34928[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32104__auto__ = null;
var cljs$core$async$state_machine__32104__auto____0 = (function (){
var statearr_32825 = [null,null,null,null,null,null,null,null];
(statearr_32825[(0)] = cljs$core$async$state_machine__32104__auto__);

(statearr_32825[(1)] = (1));

return statearr_32825;
});
var cljs$core$async$state_machine__32104__auto____1 = (function (state_32804){
while(true){
var ret_value__32105__auto__ = (function (){try{while(true){
var result__32106__auto__ = switch__32103__auto__(state_32804);
if(cljs.core.keyword_identical_QMARK_(result__32106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32106__auto__;
}
break;
}
}catch (e32826){var ex__32107__auto__ = e32826;
var statearr_32827_34929 = state_32804;
(statearr_32827_34929[(2)] = ex__32107__auto__);


if(cljs.core.seq((state_32804[(4)]))){
var statearr_32828_34930 = state_32804;
(statearr_32828_34930[(1)] = cljs.core.first((state_32804[(4)])));

} else {
throw ex__32107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34931 = state_32804;
state_32804 = G__34931;
continue;
} else {
return ret_value__32105__auto__;
}
break;
}
});
cljs$core$async$state_machine__32104__auto__ = function(state_32804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32104__auto____1.call(this,state_32804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32104__auto____0;
cljs$core$async$state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32104__auto____1;
return cljs$core$async$state_machine__32104__auto__;
})()
})();
var state__32624__auto__ = (function (){var statearr_32829 = f__32623__auto__();
(statearr_32829[(6)] = c__32622__auto___34908);

return statearr_32829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32624__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__32831){
var vec__32832 = p__32831;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32832,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32832,(1),null);
var job = vec__32832;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32622__auto___34934 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32623__auto__ = (function (){var switch__32103__auto__ = (function (state_32839){
var state_val_32840 = (state_32839[(1)]);
if((state_val_32840 === (1))){
var state_32839__$1 = state_32839;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32839__$1,(2),res,v);
} else {
if((state_val_32840 === (2))){
var inst_32836 = (state_32839[(2)]);
var inst_32837 = cljs.core.async.close_BANG_(res);
var state_32839__$1 = (function (){var statearr_32842 = state_32839;
(statearr_32842[(7)] = inst_32836);

return statearr_32842;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32839__$1,inst_32837);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32104__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32104__auto____0 = (function (){
var statearr_32843 = [null,null,null,null,null,null,null,null];
(statearr_32843[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32104__auto__);

(statearr_32843[(1)] = (1));

return statearr_32843;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32104__auto____1 = (function (state_32839){
while(true){
var ret_value__32105__auto__ = (function (){try{while(true){
var result__32106__auto__ = switch__32103__auto__(state_32839);
if(cljs.core.keyword_identical_QMARK_(result__32106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32106__auto__;
}
break;
}
}catch (e32844){var ex__32107__auto__ = e32844;
var statearr_32845_34935 = state_32839;
(statearr_32845_34935[(2)] = ex__32107__auto__);


if(cljs.core.seq((state_32839[(4)]))){
var statearr_32846_34936 = state_32839;
(statearr_32846_34936[(1)] = cljs.core.first((state_32839[(4)])));

} else {
throw ex__32107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34938 = state_32839;
state_32839 = G__34938;
continue;
} else {
return ret_value__32105__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32104__auto__ = function(state_32839){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32104__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32104__auto____1.call(this,state_32839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32104__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32104__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32104__auto__;
})()
})();
var state__32624__auto__ = (function (){var statearr_32848 = f__32623__auto__();
(statearr_32848[(6)] = c__32622__auto___34934);

return statearr_32848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32624__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32849){
var vec__32850 = p__32849;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32850,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32850,(1),null);
var job = vec__32850;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___34941 = n;
var __34942 = (0);
while(true){
if((__34942 < n__4741__auto___34941)){
var G__32853_34943 = type;
var G__32853_34944__$1 = (((G__32853_34943 instanceof cljs.core.Keyword))?G__32853_34943.fqn:null);
switch (G__32853_34944__$1) {
case "compute":
var c__32622__auto___34946 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34942,c__32622__auto___34946,G__32853_34943,G__32853_34944__$1,n__4741__auto___34941,jobs,results,process,async){
return (function (){
var f__32623__auto__ = (function (){var switch__32103__auto__ = ((function (__34942,c__32622__auto___34946,G__32853_34943,G__32853_34944__$1,n__4741__auto___34941,jobs,results,process,async){
return (function (state_32867){
var state_val_32868 = (state_32867[(1)]);
if((state_val_32868 === (1))){
var state_32867__$1 = state_32867;
var statearr_32869_34947 = state_32867__$1;
(statearr_32869_34947[(2)] = null);

(statearr_32869_34947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32868 === (2))){
var state_32867__$1 = state_32867;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32867__$1,(4),jobs);
} else {
if((state_val_32868 === (3))){
var inst_32865 = (state_32867[(2)]);
var state_32867__$1 = state_32867;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32867__$1,inst_32865);
} else {
if((state_val_32868 === (4))){
var inst_32857 = (state_32867[(2)]);
var inst_32858 = process(inst_32857);
var state_32867__$1 = state_32867;
if(cljs.core.truth_(inst_32858)){
var statearr_32870_34948 = state_32867__$1;
(statearr_32870_34948[(1)] = (5));

} else {
var statearr_32871_34949 = state_32867__$1;
(statearr_32871_34949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32868 === (5))){
var state_32867__$1 = state_32867;
var statearr_32872_34950 = state_32867__$1;
(statearr_32872_34950[(2)] = null);

(statearr_32872_34950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32868 === (6))){
var state_32867__$1 = state_32867;
var statearr_32874_34951 = state_32867__$1;
(statearr_32874_34951[(2)] = null);

(statearr_32874_34951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32868 === (7))){
var inst_32863 = (state_32867[(2)]);
var state_32867__$1 = state_32867;
var statearr_32875_34953 = state_32867__$1;
(statearr_32875_34953[(2)] = inst_32863);

(statearr_32875_34953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34942,c__32622__auto___34946,G__32853_34943,G__32853_34944__$1,n__4741__auto___34941,jobs,results,process,async))
;
return ((function (__34942,switch__32103__auto__,c__32622__auto___34946,G__32853_34943,G__32853_34944__$1,n__4741__auto___34941,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32104__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32104__auto____0 = (function (){
var statearr_32876 = [null,null,null,null,null,null,null];
(statearr_32876[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32104__auto__);

(statearr_32876[(1)] = (1));

return statearr_32876;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32104__auto____1 = (function (state_32867){
while(true){
var ret_value__32105__auto__ = (function (){try{while(true){
var result__32106__auto__ = switch__32103__auto__(state_32867);
if(cljs.core.keyword_identical_QMARK_(result__32106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32106__auto__;
}
break;
}
}catch (e32877){var ex__32107__auto__ = e32877;
var statearr_32878_34955 = state_32867;
(statearr_32878_34955[(2)] = ex__32107__auto__);


if(cljs.core.seq((state_32867[(4)]))){
var statearr_32879_34956 = state_32867;
(statearr_32879_34956[(1)] = cljs.core.first((state_32867[(4)])));

} else {
throw ex__32107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34957 = state_32867;
state_32867 = G__34957;
continue;
} else {
return ret_value__32105__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32104__auto__ = function(state_32867){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32104__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32104__auto____1.call(this,state_32867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32104__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32104__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32104__auto__;
})()
;})(__34942,switch__32103__auto__,c__32622__auto___34946,G__32853_34943,G__32853_34944__$1,n__4741__auto___34941,jobs,results,process,async))
})();
var state__32624__auto__ = (function (){var statearr_32880 = f__32623__auto__();
(statearr_32880[(6)] = c__32622__auto___34946);

return statearr_32880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32624__auto__);
});})(__34942,c__32622__auto___34946,G__32853_34943,G__32853_34944__$1,n__4741__auto___34941,jobs,results,process,async))
);


break;
case "async":
var c__32622__auto___34961 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34942,c__32622__auto___34961,G__32853_34943,G__32853_34944__$1,n__4741__auto___34941,jobs,results,process,async){
return (function (){
var f__32623__auto__ = (function (){var switch__32103__auto__ = ((function (__34942,c__32622__auto___34961,G__32853_34943,G__32853_34944__$1,n__4741__auto___34941,jobs,results,process,async){
return (function (state_32894){
var state_val_32895 = (state_32894[(1)]);
if((state_val_32895 === (1))){
var state_32894__$1 = state_32894;
var statearr_32896_34962 = state_32894__$1;
(statearr_32896_34962[(2)] = null);

(statearr_32896_34962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32895 === (2))){
var state_32894__$1 = state_32894;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32894__$1,(4),jobs);
} else {
if((state_val_32895 === (3))){
var inst_32892 = (state_32894[(2)]);
var state_32894__$1 = state_32894;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32894__$1,inst_32892);
} else {
if((state_val_32895 === (4))){
var inst_32884 = (state_32894[(2)]);
var inst_32885 = async(inst_32884);
var state_32894__$1 = state_32894;
if(cljs.core.truth_(inst_32885)){
var statearr_32897_34963 = state_32894__$1;
(statearr_32897_34963[(1)] = (5));

} else {
var statearr_32898_34964 = state_32894__$1;
(statearr_32898_34964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32895 === (5))){
var state_32894__$1 = state_32894;
var statearr_32900_34965 = state_32894__$1;
(statearr_32900_34965[(2)] = null);

(statearr_32900_34965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32895 === (6))){
var state_32894__$1 = state_32894;
var statearr_32901_34967 = state_32894__$1;
(statearr_32901_34967[(2)] = null);

(statearr_32901_34967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32895 === (7))){
var inst_32890 = (state_32894[(2)]);
var state_32894__$1 = state_32894;
var statearr_32902_34969 = state_32894__$1;
(statearr_32902_34969[(2)] = inst_32890);

(statearr_32902_34969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34942,c__32622__auto___34961,G__32853_34943,G__32853_34944__$1,n__4741__auto___34941,jobs,results,process,async))
;
return ((function (__34942,switch__32103__auto__,c__32622__auto___34961,G__32853_34943,G__32853_34944__$1,n__4741__auto___34941,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32104__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32104__auto____0 = (function (){
var statearr_32903 = [null,null,null,null,null,null,null];
(statearr_32903[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32104__auto__);

(statearr_32903[(1)] = (1));

return statearr_32903;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32104__auto____1 = (function (state_32894){
while(true){
var ret_value__32105__auto__ = (function (){try{while(true){
var result__32106__auto__ = switch__32103__auto__(state_32894);
if(cljs.core.keyword_identical_QMARK_(result__32106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32106__auto__;
}
break;
}
}catch (e32904){var ex__32107__auto__ = e32904;
var statearr_32905_34970 = state_32894;
(statearr_32905_34970[(2)] = ex__32107__auto__);


if(cljs.core.seq((state_32894[(4)]))){
var statearr_32906_34971 = state_32894;
(statearr_32906_34971[(1)] = cljs.core.first((state_32894[(4)])));

} else {
throw ex__32107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34972 = state_32894;
state_32894 = G__34972;
continue;
} else {
return ret_value__32105__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32104__auto__ = function(state_32894){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32104__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32104__auto____1.call(this,state_32894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32104__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32104__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32104__auto__;
})()
;})(__34942,switch__32103__auto__,c__32622__auto___34961,G__32853_34943,G__32853_34944__$1,n__4741__auto___34941,jobs,results,process,async))
})();
var state__32624__auto__ = (function (){var statearr_32907 = f__32623__auto__();
(statearr_32907[(6)] = c__32622__auto___34961);

return statearr_32907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32624__auto__);
});})(__34942,c__32622__auto___34961,G__32853_34943,G__32853_34944__$1,n__4741__auto___34941,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32853_34944__$1)].join('')));

}

var G__34973 = (__34942 + (1));
__34942 = G__34973;
continue;
} else {
}
break;
}

var c__32622__auto___34974 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32623__auto__ = (function (){var switch__32103__auto__ = (function (state_32930){
var state_val_32931 = (state_32930[(1)]);
if((state_val_32931 === (7))){
var inst_32926 = (state_32930[(2)]);
var state_32930__$1 = state_32930;
var statearr_32933_34975 = state_32930__$1;
(statearr_32933_34975[(2)] = inst_32926);

(statearr_32933_34975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (1))){
var state_32930__$1 = state_32930;
var statearr_32934_34976 = state_32930__$1;
(statearr_32934_34976[(2)] = null);

(statearr_32934_34976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (4))){
var inst_32911 = (state_32930[(7)]);
var inst_32911__$1 = (state_32930[(2)]);
var inst_32912 = (inst_32911__$1 == null);
var state_32930__$1 = (function (){var statearr_32935 = state_32930;
(statearr_32935[(7)] = inst_32911__$1);

return statearr_32935;
})();
if(cljs.core.truth_(inst_32912)){
var statearr_32936_34977 = state_32930__$1;
(statearr_32936_34977[(1)] = (5));

} else {
var statearr_32937_34978 = state_32930__$1;
(statearr_32937_34978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (6))){
var inst_32911 = (state_32930[(7)]);
var inst_32916 = (state_32930[(8)]);
var inst_32916__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32917 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32918 = [inst_32911,inst_32916__$1];
var inst_32919 = (new cljs.core.PersistentVector(null,2,(5),inst_32917,inst_32918,null));
var state_32930__$1 = (function (){var statearr_32938 = state_32930;
(statearr_32938[(8)] = inst_32916__$1);

return statearr_32938;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32930__$1,(8),jobs,inst_32919);
} else {
if((state_val_32931 === (3))){
var inst_32928 = (state_32930[(2)]);
var state_32930__$1 = state_32930;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32930__$1,inst_32928);
} else {
if((state_val_32931 === (2))){
var state_32930__$1 = state_32930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32930__$1,(4),from);
} else {
if((state_val_32931 === (9))){
var inst_32923 = (state_32930[(2)]);
var state_32930__$1 = (function (){var statearr_32940 = state_32930;
(statearr_32940[(9)] = inst_32923);

return statearr_32940;
})();
var statearr_32941_34981 = state_32930__$1;
(statearr_32941_34981[(2)] = null);

(statearr_32941_34981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (5))){
var inst_32914 = cljs.core.async.close_BANG_(jobs);
var state_32930__$1 = state_32930;
var statearr_32942_34982 = state_32930__$1;
(statearr_32942_34982[(2)] = inst_32914);

(statearr_32942_34982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (8))){
var inst_32916 = (state_32930[(8)]);
var inst_32921 = (state_32930[(2)]);
var state_32930__$1 = (function (){var statearr_32943 = state_32930;
(statearr_32943[(10)] = inst_32921);

return statearr_32943;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32930__$1,(9),results,inst_32916);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32104__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32104__auto____0 = (function (){
var statearr_32944 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32944[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32104__auto__);

(statearr_32944[(1)] = (1));

return statearr_32944;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32104__auto____1 = (function (state_32930){
while(true){
var ret_value__32105__auto__ = (function (){try{while(true){
var result__32106__auto__ = switch__32103__auto__(state_32930);
if(cljs.core.keyword_identical_QMARK_(result__32106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32106__auto__;
}
break;
}
}catch (e32945){var ex__32107__auto__ = e32945;
var statearr_32947_34983 = state_32930;
(statearr_32947_34983[(2)] = ex__32107__auto__);


if(cljs.core.seq((state_32930[(4)]))){
var statearr_32948_34984 = state_32930;
(statearr_32948_34984[(1)] = cljs.core.first((state_32930[(4)])));

} else {
throw ex__32107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34985 = state_32930;
state_32930 = G__34985;
continue;
} else {
return ret_value__32105__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32104__auto__ = function(state_32930){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32104__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32104__auto____1.call(this,state_32930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32104__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32104__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32104__auto__;
})()
})();
var state__32624__auto__ = (function (){var statearr_32949 = f__32623__auto__();
(statearr_32949[(6)] = c__32622__auto___34974);

return statearr_32949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32624__auto__);
}));


var c__32622__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32623__auto__ = (function (){var switch__32103__auto__ = (function (state_32988){
var state_val_32989 = (state_32988[(1)]);
if((state_val_32989 === (7))){
var inst_32984 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
var statearr_32990_34986 = state_32988__$1;
(statearr_32990_34986[(2)] = inst_32984);

(statearr_32990_34986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (20))){
var state_32988__$1 = state_32988;
var statearr_32991_34987 = state_32988__$1;
(statearr_32991_34987[(2)] = null);

(statearr_32991_34987[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (1))){
var state_32988__$1 = state_32988;
var statearr_32993_34988 = state_32988__$1;
(statearr_32993_34988[(2)] = null);

(statearr_32993_34988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (4))){
var inst_32952 = (state_32988[(7)]);
var inst_32952__$1 = (state_32988[(2)]);
var inst_32953 = (inst_32952__$1 == null);
var state_32988__$1 = (function (){var statearr_32995 = state_32988;
(statearr_32995[(7)] = inst_32952__$1);

return statearr_32995;
})();
if(cljs.core.truth_(inst_32953)){
var statearr_32996_34990 = state_32988__$1;
(statearr_32996_34990[(1)] = (5));

} else {
var statearr_32997_34991 = state_32988__$1;
(statearr_32997_34991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (15))){
var inst_32965 = (state_32988[(8)]);
var state_32988__$1 = state_32988;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32988__$1,(18),to,inst_32965);
} else {
if((state_val_32989 === (21))){
var inst_32978 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
var statearr_32998_34992 = state_32988__$1;
(statearr_32998_34992[(2)] = inst_32978);

(statearr_32998_34992[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (13))){
var inst_32980 = (state_32988[(2)]);
var state_32988__$1 = (function (){var statearr_32999 = state_32988;
(statearr_32999[(9)] = inst_32980);

return statearr_32999;
})();
var statearr_33000_34993 = state_32988__$1;
(statearr_33000_34993[(2)] = null);

(statearr_33000_34993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (6))){
var inst_32952 = (state_32988[(7)]);
var state_32988__$1 = state_32988;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32988__$1,(11),inst_32952);
} else {
if((state_val_32989 === (17))){
var inst_32973 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
if(cljs.core.truth_(inst_32973)){
var statearr_33001_34995 = state_32988__$1;
(statearr_33001_34995[(1)] = (19));

} else {
var statearr_33002_34996 = state_32988__$1;
(statearr_33002_34996[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (3))){
var inst_32986 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32988__$1,inst_32986);
} else {
if((state_val_32989 === (12))){
var inst_32962 = (state_32988[(10)]);
var state_32988__$1 = state_32988;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32988__$1,(14),inst_32962);
} else {
if((state_val_32989 === (2))){
var state_32988__$1 = state_32988;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32988__$1,(4),results);
} else {
if((state_val_32989 === (19))){
var state_32988__$1 = state_32988;
var statearr_33005_34999 = state_32988__$1;
(statearr_33005_34999[(2)] = null);

(statearr_33005_34999[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (11))){
var inst_32962 = (state_32988[(2)]);
var state_32988__$1 = (function (){var statearr_33006 = state_32988;
(statearr_33006[(10)] = inst_32962);

return statearr_33006;
})();
var statearr_33007_35000 = state_32988__$1;
(statearr_33007_35000[(2)] = null);

(statearr_33007_35000[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (9))){
var state_32988__$1 = state_32988;
var statearr_33008_35001 = state_32988__$1;
(statearr_33008_35001[(2)] = null);

(statearr_33008_35001[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (5))){
var state_32988__$1 = state_32988;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33009_35002 = state_32988__$1;
(statearr_33009_35002[(1)] = (8));

} else {
var statearr_33010_35003 = state_32988__$1;
(statearr_33010_35003[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (14))){
var inst_32967 = (state_32988[(11)]);
var inst_32965 = (state_32988[(8)]);
var inst_32965__$1 = (state_32988[(2)]);
var inst_32966 = (inst_32965__$1 == null);
var inst_32967__$1 = cljs.core.not(inst_32966);
var state_32988__$1 = (function (){var statearr_33011 = state_32988;
(statearr_33011[(11)] = inst_32967__$1);

(statearr_33011[(8)] = inst_32965__$1);

return statearr_33011;
})();
if(inst_32967__$1){
var statearr_33012_35008 = state_32988__$1;
(statearr_33012_35008[(1)] = (15));

} else {
var statearr_33013_35009 = state_32988__$1;
(statearr_33013_35009[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (16))){
var inst_32967 = (state_32988[(11)]);
var state_32988__$1 = state_32988;
var statearr_33014_35010 = state_32988__$1;
(statearr_33014_35010[(2)] = inst_32967);

(statearr_33014_35010[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (10))){
var inst_32959 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
var statearr_33015_35011 = state_32988__$1;
(statearr_33015_35011[(2)] = inst_32959);

(statearr_33015_35011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (18))){
var inst_32970 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
var statearr_33016_35012 = state_32988__$1;
(statearr_33016_35012[(2)] = inst_32970);

(statearr_33016_35012[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (8))){
var inst_32956 = cljs.core.async.close_BANG_(to);
var state_32988__$1 = state_32988;
var statearr_33017_35013 = state_32988__$1;
(statearr_33017_35013[(2)] = inst_32956);

(statearr_33017_35013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32104__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32104__auto____0 = (function (){
var statearr_33018 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33018[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32104__auto__);

(statearr_33018[(1)] = (1));

return statearr_33018;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32104__auto____1 = (function (state_32988){
while(true){
var ret_value__32105__auto__ = (function (){try{while(true){
var result__32106__auto__ = switch__32103__auto__(state_32988);
if(cljs.core.keyword_identical_QMARK_(result__32106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32106__auto__;
}
break;
}
}catch (e33020){var ex__32107__auto__ = e33020;
var statearr_33022_35014 = state_32988;
(statearr_33022_35014[(2)] = ex__32107__auto__);


if(cljs.core.seq((state_32988[(4)]))){
var statearr_33023_35015 = state_32988;
(statearr_33023_35015[(1)] = cljs.core.first((state_32988[(4)])));

} else {
throw ex__32107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35016 = state_32988;
state_32988 = G__35016;
continue;
} else {
return ret_value__32105__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32104__auto__ = function(state_32988){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32104__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32104__auto____1.call(this,state_32988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32104__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32104__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32104__auto__;
})()
})();
var state__32624__auto__ = (function (){var statearr_33024 = f__32623__auto__();
(statearr_33024[(6)] = c__32622__auto__);

return statearr_33024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32624__auto__);
}));

return c__32622__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33026 = arguments.length;
switch (G__33026) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33028 = arguments.length;
switch (G__33028) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33039 = arguments.length;
switch (G__33039) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__32622__auto___35021 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32623__auto__ = (function (){var switch__32103__auto__ = (function (state_33073){
var state_val_33074 = (state_33073[(1)]);
if((state_val_33074 === (7))){
var inst_33069 = (state_33073[(2)]);
var state_33073__$1 = state_33073;
var statearr_33079_35023 = state_33073__$1;
(statearr_33079_35023[(2)] = inst_33069);

(statearr_33079_35023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33074 === (1))){
var state_33073__$1 = state_33073;
var statearr_33081_35024 = state_33073__$1;
(statearr_33081_35024[(2)] = null);

(statearr_33081_35024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33074 === (4))){
var inst_33047 = (state_33073[(7)]);
var inst_33047__$1 = (state_33073[(2)]);
var inst_33048 = (inst_33047__$1 == null);
var state_33073__$1 = (function (){var statearr_33085 = state_33073;
(statearr_33085[(7)] = inst_33047__$1);

return statearr_33085;
})();
if(cljs.core.truth_(inst_33048)){
var statearr_33086_35025 = state_33073__$1;
(statearr_33086_35025[(1)] = (5));

} else {
var statearr_33087_35026 = state_33073__$1;
(statearr_33087_35026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33074 === (13))){
var state_33073__$1 = state_33073;
var statearr_33089_35027 = state_33073__$1;
(statearr_33089_35027[(2)] = null);

(statearr_33089_35027[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33074 === (6))){
var inst_33047 = (state_33073[(7)]);
var inst_33055 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33047) : p.call(null,inst_33047));
var state_33073__$1 = state_33073;
if(cljs.core.truth_(inst_33055)){
var statearr_33093_35028 = state_33073__$1;
(statearr_33093_35028[(1)] = (9));

} else {
var statearr_33094_35029 = state_33073__$1;
(statearr_33094_35029[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33074 === (3))){
var inst_33071 = (state_33073[(2)]);
var state_33073__$1 = state_33073;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33073__$1,inst_33071);
} else {
if((state_val_33074 === (12))){
var state_33073__$1 = state_33073;
var statearr_33099_35030 = state_33073__$1;
(statearr_33099_35030[(2)] = null);

(statearr_33099_35030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33074 === (2))){
var state_33073__$1 = state_33073;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33073__$1,(4),ch);
} else {
if((state_val_33074 === (11))){
var inst_33047 = (state_33073[(7)]);
var inst_33060 = (state_33073[(2)]);
var state_33073__$1 = state_33073;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33073__$1,(8),inst_33060,inst_33047);
} else {
if((state_val_33074 === (9))){
var state_33073__$1 = state_33073;
var statearr_33103_35035 = state_33073__$1;
(statearr_33103_35035[(2)] = tc);

(statearr_33103_35035[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33074 === (5))){
var inst_33050 = cljs.core.async.close_BANG_(tc);
var inst_33051 = cljs.core.async.close_BANG_(fc);
var state_33073__$1 = (function (){var statearr_33105 = state_33073;
(statearr_33105[(8)] = inst_33050);

return statearr_33105;
})();
var statearr_33106_35036 = state_33073__$1;
(statearr_33106_35036[(2)] = inst_33051);

(statearr_33106_35036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33074 === (14))){
var inst_33067 = (state_33073[(2)]);
var state_33073__$1 = state_33073;
var statearr_33108_35037 = state_33073__$1;
(statearr_33108_35037[(2)] = inst_33067);

(statearr_33108_35037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33074 === (10))){
var state_33073__$1 = state_33073;
var statearr_33112_35038 = state_33073__$1;
(statearr_33112_35038[(2)] = fc);

(statearr_33112_35038[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33074 === (8))){
var inst_33062 = (state_33073[(2)]);
var state_33073__$1 = state_33073;
if(cljs.core.truth_(inst_33062)){
var statearr_33113_35043 = state_33073__$1;
(statearr_33113_35043[(1)] = (12));

} else {
var statearr_33115_35044 = state_33073__$1;
(statearr_33115_35044[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32104__auto__ = null;
var cljs$core$async$state_machine__32104__auto____0 = (function (){
var statearr_33119 = [null,null,null,null,null,null,null,null,null];
(statearr_33119[(0)] = cljs$core$async$state_machine__32104__auto__);

(statearr_33119[(1)] = (1));

return statearr_33119;
});
var cljs$core$async$state_machine__32104__auto____1 = (function (state_33073){
while(true){
var ret_value__32105__auto__ = (function (){try{while(true){
var result__32106__auto__ = switch__32103__auto__(state_33073);
if(cljs.core.keyword_identical_QMARK_(result__32106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32106__auto__;
}
break;
}
}catch (e33120){var ex__32107__auto__ = e33120;
var statearr_33122_35052 = state_33073;
(statearr_33122_35052[(2)] = ex__32107__auto__);


if(cljs.core.seq((state_33073[(4)]))){
var statearr_33123_35053 = state_33073;
(statearr_33123_35053[(1)] = cljs.core.first((state_33073[(4)])));

} else {
throw ex__32107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35054 = state_33073;
state_33073 = G__35054;
continue;
} else {
return ret_value__32105__auto__;
}
break;
}
});
cljs$core$async$state_machine__32104__auto__ = function(state_33073){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32104__auto____1.call(this,state_33073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32104__auto____0;
cljs$core$async$state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32104__auto____1;
return cljs$core$async$state_machine__32104__auto__;
})()
})();
var state__32624__auto__ = (function (){var statearr_33127 = f__32623__auto__();
(statearr_33127[(6)] = c__32622__auto___35021);

return statearr_33127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32624__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32622__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32623__auto__ = (function (){var switch__32103__auto__ = (function (state_33159){
var state_val_33160 = (state_33159[(1)]);
if((state_val_33160 === (7))){
var inst_33154 = (state_33159[(2)]);
var state_33159__$1 = state_33159;
var statearr_33165_35058 = state_33159__$1;
(statearr_33165_35058[(2)] = inst_33154);

(statearr_33165_35058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33160 === (1))){
var inst_33133 = init;
var inst_33134 = inst_33133;
var state_33159__$1 = (function (){var statearr_33167 = state_33159;
(statearr_33167[(7)] = inst_33134);

return statearr_33167;
})();
var statearr_33170_35059 = state_33159__$1;
(statearr_33170_35059[(2)] = null);

(statearr_33170_35059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33160 === (4))){
var inst_33140 = (state_33159[(8)]);
var inst_33140__$1 = (state_33159[(2)]);
var inst_33142 = (inst_33140__$1 == null);
var state_33159__$1 = (function (){var statearr_33172 = state_33159;
(statearr_33172[(8)] = inst_33140__$1);

return statearr_33172;
})();
if(cljs.core.truth_(inst_33142)){
var statearr_33174_35063 = state_33159__$1;
(statearr_33174_35063[(1)] = (5));

} else {
var statearr_33175_35064 = state_33159__$1;
(statearr_33175_35064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33160 === (6))){
var inst_33145 = (state_33159[(9)]);
var inst_33134 = (state_33159[(7)]);
var inst_33140 = (state_33159[(8)]);
var inst_33145__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33134,inst_33140) : f.call(null,inst_33134,inst_33140));
var inst_33146 = cljs.core.reduced_QMARK_(inst_33145__$1);
var state_33159__$1 = (function (){var statearr_33179 = state_33159;
(statearr_33179[(9)] = inst_33145__$1);

return statearr_33179;
})();
if(inst_33146){
var statearr_33181_35065 = state_33159__$1;
(statearr_33181_35065[(1)] = (8));

} else {
var statearr_33183_35066 = state_33159__$1;
(statearr_33183_35066[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33160 === (3))){
var inst_33156 = (state_33159[(2)]);
var state_33159__$1 = state_33159;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33159__$1,inst_33156);
} else {
if((state_val_33160 === (2))){
var state_33159__$1 = state_33159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33159__$1,(4),ch);
} else {
if((state_val_33160 === (9))){
var inst_33145 = (state_33159[(9)]);
var inst_33134 = inst_33145;
var state_33159__$1 = (function (){var statearr_33187 = state_33159;
(statearr_33187[(7)] = inst_33134);

return statearr_33187;
})();
var statearr_33189_35070 = state_33159__$1;
(statearr_33189_35070[(2)] = null);

(statearr_33189_35070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33160 === (5))){
var inst_33134 = (state_33159[(7)]);
var state_33159__$1 = state_33159;
var statearr_33191_35071 = state_33159__$1;
(statearr_33191_35071[(2)] = inst_33134);

(statearr_33191_35071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33160 === (10))){
var inst_33152 = (state_33159[(2)]);
var state_33159__$1 = state_33159;
var statearr_33194_35072 = state_33159__$1;
(statearr_33194_35072[(2)] = inst_33152);

(statearr_33194_35072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33160 === (8))){
var inst_33145 = (state_33159[(9)]);
var inst_33148 = cljs.core.deref(inst_33145);
var state_33159__$1 = state_33159;
var statearr_33196_35073 = state_33159__$1;
(statearr_33196_35073[(2)] = inst_33148);

(statearr_33196_35073[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__32104__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32104__auto____0 = (function (){
var statearr_33200 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33200[(0)] = cljs$core$async$reduce_$_state_machine__32104__auto__);

(statearr_33200[(1)] = (1));

return statearr_33200;
});
var cljs$core$async$reduce_$_state_machine__32104__auto____1 = (function (state_33159){
while(true){
var ret_value__32105__auto__ = (function (){try{while(true){
var result__32106__auto__ = switch__32103__auto__(state_33159);
if(cljs.core.keyword_identical_QMARK_(result__32106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32106__auto__;
}
break;
}
}catch (e33202){var ex__32107__auto__ = e33202;
var statearr_33203_35078 = state_33159;
(statearr_33203_35078[(2)] = ex__32107__auto__);


if(cljs.core.seq((state_33159[(4)]))){
var statearr_33204_35079 = state_33159;
(statearr_33204_35079[(1)] = cljs.core.first((state_33159[(4)])));

} else {
throw ex__32107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35083 = state_33159;
state_33159 = G__35083;
continue;
} else {
return ret_value__32105__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32104__auto__ = function(state_33159){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32104__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32104__auto____1.call(this,state_33159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32104__auto____0;
cljs$core$async$reduce_$_state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32104__auto____1;
return cljs$core$async$reduce_$_state_machine__32104__auto__;
})()
})();
var state__32624__auto__ = (function (){var statearr_33210 = f__32623__auto__();
(statearr_33210[(6)] = c__32622__auto__);

return statearr_33210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32624__auto__);
}));

return c__32622__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32622__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32623__auto__ = (function (){var switch__32103__auto__ = (function (state_33224){
var state_val_33225 = (state_33224[(1)]);
if((state_val_33225 === (1))){
var inst_33218 = cljs.core.async.reduce(f__$1,init,ch);
var state_33224__$1 = state_33224;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33224__$1,(2),inst_33218);
} else {
if((state_val_33225 === (2))){
var inst_33220 = (state_33224[(2)]);
var inst_33221 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33220) : f__$1.call(null,inst_33220));
var state_33224__$1 = state_33224;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33224__$1,inst_33221);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32104__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32104__auto____0 = (function (){
var statearr_33233 = [null,null,null,null,null,null,null];
(statearr_33233[(0)] = cljs$core$async$transduce_$_state_machine__32104__auto__);

(statearr_33233[(1)] = (1));

return statearr_33233;
});
var cljs$core$async$transduce_$_state_machine__32104__auto____1 = (function (state_33224){
while(true){
var ret_value__32105__auto__ = (function (){try{while(true){
var result__32106__auto__ = switch__32103__auto__(state_33224);
if(cljs.core.keyword_identical_QMARK_(result__32106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32106__auto__;
}
break;
}
}catch (e33234){var ex__32107__auto__ = e33234;
var statearr_33237_35087 = state_33224;
(statearr_33237_35087[(2)] = ex__32107__auto__);


if(cljs.core.seq((state_33224[(4)]))){
var statearr_33239_35088 = state_33224;
(statearr_33239_35088[(1)] = cljs.core.first((state_33224[(4)])));

} else {
throw ex__32107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35089 = state_33224;
state_33224 = G__35089;
continue;
} else {
return ret_value__32105__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32104__auto__ = function(state_33224){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32104__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32104__auto____1.call(this,state_33224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32104__auto____0;
cljs$core$async$transduce_$_state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32104__auto____1;
return cljs$core$async$transduce_$_state_machine__32104__auto__;
})()
})();
var state__32624__auto__ = (function (){var statearr_33243 = f__32623__auto__();
(statearr_33243[(6)] = c__32622__auto__);

return statearr_33243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32624__auto__);
}));

return c__32622__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__33251 = arguments.length;
switch (G__33251) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32622__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32623__auto__ = (function (){var switch__32103__auto__ = (function (state_33285){
var state_val_33286 = (state_33285[(1)]);
if((state_val_33286 === (7))){
var inst_33264 = (state_33285[(2)]);
var state_33285__$1 = state_33285;
var statearr_33291_35094 = state_33285__$1;
(statearr_33291_35094[(2)] = inst_33264);

(statearr_33291_35094[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (1))){
var inst_33257 = cljs.core.seq(coll);
var inst_33258 = inst_33257;
var state_33285__$1 = (function (){var statearr_33293 = state_33285;
(statearr_33293[(7)] = inst_33258);

return statearr_33293;
})();
var statearr_33294_35098 = state_33285__$1;
(statearr_33294_35098[(2)] = null);

(statearr_33294_35098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (4))){
var inst_33258 = (state_33285[(7)]);
var inst_33262 = cljs.core.first(inst_33258);
var state_33285__$1 = state_33285;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33285__$1,(7),ch,inst_33262);
} else {
if((state_val_33286 === (13))){
var inst_33277 = (state_33285[(2)]);
var state_33285__$1 = state_33285;
var statearr_33298_35099 = state_33285__$1;
(statearr_33298_35099[(2)] = inst_33277);

(statearr_33298_35099[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (6))){
var inst_33267 = (state_33285[(2)]);
var state_33285__$1 = state_33285;
if(cljs.core.truth_(inst_33267)){
var statearr_33303_35100 = state_33285__$1;
(statearr_33303_35100[(1)] = (8));

} else {
var statearr_33304_35101 = state_33285__$1;
(statearr_33304_35101[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (3))){
var inst_33282 = (state_33285[(2)]);
var state_33285__$1 = state_33285;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33285__$1,inst_33282);
} else {
if((state_val_33286 === (12))){
var state_33285__$1 = state_33285;
var statearr_33306_35103 = state_33285__$1;
(statearr_33306_35103[(2)] = null);

(statearr_33306_35103[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (2))){
var inst_33258 = (state_33285[(7)]);
var state_33285__$1 = state_33285;
if(cljs.core.truth_(inst_33258)){
var statearr_33310_35105 = state_33285__$1;
(statearr_33310_35105[(1)] = (4));

} else {
var statearr_33311_35106 = state_33285__$1;
(statearr_33311_35106[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (11))){
var inst_33273 = cljs.core.async.close_BANG_(ch);
var state_33285__$1 = state_33285;
var statearr_33313_35108 = state_33285__$1;
(statearr_33313_35108[(2)] = inst_33273);

(statearr_33313_35108[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (9))){
var state_33285__$1 = state_33285;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33317_35109 = state_33285__$1;
(statearr_33317_35109[(1)] = (11));

} else {
var statearr_33319_35110 = state_33285__$1;
(statearr_33319_35110[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (5))){
var inst_33258 = (state_33285[(7)]);
var state_33285__$1 = state_33285;
var statearr_33322_35111 = state_33285__$1;
(statearr_33322_35111[(2)] = inst_33258);

(statearr_33322_35111[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (10))){
var inst_33279 = (state_33285[(2)]);
var state_33285__$1 = state_33285;
var statearr_33326_35113 = state_33285__$1;
(statearr_33326_35113[(2)] = inst_33279);

(statearr_33326_35113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (8))){
var inst_33258 = (state_33285[(7)]);
var inst_33269 = cljs.core.next(inst_33258);
var inst_33258__$1 = inst_33269;
var state_33285__$1 = (function (){var statearr_33328 = state_33285;
(statearr_33328[(7)] = inst_33258__$1);

return statearr_33328;
})();
var statearr_33329_35118 = state_33285__$1;
(statearr_33329_35118[(2)] = null);

(statearr_33329_35118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32104__auto__ = null;
var cljs$core$async$state_machine__32104__auto____0 = (function (){
var statearr_33333 = [null,null,null,null,null,null,null,null];
(statearr_33333[(0)] = cljs$core$async$state_machine__32104__auto__);

(statearr_33333[(1)] = (1));

return statearr_33333;
});
var cljs$core$async$state_machine__32104__auto____1 = (function (state_33285){
while(true){
var ret_value__32105__auto__ = (function (){try{while(true){
var result__32106__auto__ = switch__32103__auto__(state_33285);
if(cljs.core.keyword_identical_QMARK_(result__32106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32106__auto__;
}
break;
}
}catch (e33335){var ex__32107__auto__ = e33335;
var statearr_33336_35120 = state_33285;
(statearr_33336_35120[(2)] = ex__32107__auto__);


if(cljs.core.seq((state_33285[(4)]))){
var statearr_33340_35121 = state_33285;
(statearr_33340_35121[(1)] = cljs.core.first((state_33285[(4)])));

} else {
throw ex__32107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35123 = state_33285;
state_33285 = G__35123;
continue;
} else {
return ret_value__32105__auto__;
}
break;
}
});
cljs$core$async$state_machine__32104__auto__ = function(state_33285){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32104__auto____1.call(this,state_33285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32104__auto____0;
cljs$core$async$state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32104__auto____1;
return cljs$core$async$state_machine__32104__auto__;
})()
})();
var state__32624__auto__ = (function (){var statearr_33342 = f__32623__auto__();
(statearr_33342[(6)] = c__32622__auto__);

return statearr_33342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32624__auto__);
}));

return c__32622__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33352 = arguments.length;
switch (G__33352) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_35126 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_35126(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35128 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_35128(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35130 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_35130(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35136 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_35136(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33393 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33393 = (function (ch,cs,meta33394){
this.ch = ch;
this.cs = cs;
this.meta33394 = meta33394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33395,meta33394__$1){
var self__ = this;
var _33395__$1 = this;
return (new cljs.core.async.t_cljs$core$async33393(self__.ch,self__.cs,meta33394__$1));
}));

(cljs.core.async.t_cljs$core$async33393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33395){
var self__ = this;
var _33395__$1 = this;
return self__.meta33394;
}));

(cljs.core.async.t_cljs$core$async33393.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33393.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33393.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33393.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33393.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33393.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33394","meta33394",512426551,null)], null);
}));

(cljs.core.async.t_cljs$core$async33393.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33393.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33393");

(cljs.core.async.t_cljs$core$async33393.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33393");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33393.
 */
cljs.core.async.__GT_t_cljs$core$async33393 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33393(ch__$1,cs__$1,meta33394){
return (new cljs.core.async.t_cljs$core$async33393(ch__$1,cs__$1,meta33394));
});

}

return (new cljs.core.async.t_cljs$core$async33393(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32622__auto___35150 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32623__auto__ = (function (){var switch__32103__auto__ = (function (state_33558){
var state_val_33559 = (state_33558[(1)]);
if((state_val_33559 === (7))){
var inst_33554 = (state_33558[(2)]);
var state_33558__$1 = state_33558;
var statearr_33561_35157 = state_33558__$1;
(statearr_33561_35157[(2)] = inst_33554);

(statearr_33561_35157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (20))){
var inst_33447 = (state_33558[(7)]);
var inst_33462 = cljs.core.first(inst_33447);
var inst_33463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33462,(0),null);
var inst_33464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33462,(1),null);
var state_33558__$1 = (function (){var statearr_33562 = state_33558;
(statearr_33562[(8)] = inst_33463);

return statearr_33562;
})();
if(cljs.core.truth_(inst_33464)){
var statearr_33567_35159 = state_33558__$1;
(statearr_33567_35159[(1)] = (22));

} else {
var statearr_33568_35160 = state_33558__$1;
(statearr_33568_35160[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (27))){
var inst_33495 = (state_33558[(9)]);
var inst_33408 = (state_33558[(10)]);
var inst_33493 = (state_33558[(11)]);
var inst_33503 = (state_33558[(12)]);
var inst_33503__$1 = cljs.core._nth(inst_33493,inst_33495);
var inst_33504 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33503__$1,inst_33408,done);
var state_33558__$1 = (function (){var statearr_33573 = state_33558;
(statearr_33573[(12)] = inst_33503__$1);

return statearr_33573;
})();
if(cljs.core.truth_(inst_33504)){
var statearr_33574_35162 = state_33558__$1;
(statearr_33574_35162[(1)] = (30));

} else {
var statearr_33575_35164 = state_33558__$1;
(statearr_33575_35164[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (1))){
var state_33558__$1 = state_33558;
var statearr_33576_35166 = state_33558__$1;
(statearr_33576_35166[(2)] = null);

(statearr_33576_35166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (24))){
var inst_33447 = (state_33558[(7)]);
var inst_33470 = (state_33558[(2)]);
var inst_33471 = cljs.core.next(inst_33447);
var inst_33421 = inst_33471;
var inst_33422 = null;
var inst_33423 = (0);
var inst_33424 = (0);
var state_33558__$1 = (function (){var statearr_33581 = state_33558;
(statearr_33581[(13)] = inst_33422);

(statearr_33581[(14)] = inst_33421);

(statearr_33581[(15)] = inst_33470);

(statearr_33581[(16)] = inst_33424);

(statearr_33581[(17)] = inst_33423);

return statearr_33581;
})();
var statearr_33582_35171 = state_33558__$1;
(statearr_33582_35171[(2)] = null);

(statearr_33582_35171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (39))){
var state_33558__$1 = state_33558;
var statearr_33590_35172 = state_33558__$1;
(statearr_33590_35172[(2)] = null);

(statearr_33590_35172[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (4))){
var inst_33408 = (state_33558[(10)]);
var inst_33408__$1 = (state_33558[(2)]);
var inst_33409 = (inst_33408__$1 == null);
var state_33558__$1 = (function (){var statearr_33591 = state_33558;
(statearr_33591[(10)] = inst_33408__$1);

return statearr_33591;
})();
if(cljs.core.truth_(inst_33409)){
var statearr_33592_35173 = state_33558__$1;
(statearr_33592_35173[(1)] = (5));

} else {
var statearr_33596_35174 = state_33558__$1;
(statearr_33596_35174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (15))){
var inst_33422 = (state_33558[(13)]);
var inst_33421 = (state_33558[(14)]);
var inst_33424 = (state_33558[(16)]);
var inst_33423 = (state_33558[(17)]);
var inst_33443 = (state_33558[(2)]);
var inst_33444 = (inst_33424 + (1));
var tmp33586 = inst_33422;
var tmp33587 = inst_33421;
var tmp33588 = inst_33423;
var inst_33421__$1 = tmp33587;
var inst_33422__$1 = tmp33586;
var inst_33423__$1 = tmp33588;
var inst_33424__$1 = inst_33444;
var state_33558__$1 = (function (){var statearr_33598 = state_33558;
(statearr_33598[(18)] = inst_33443);

(statearr_33598[(13)] = inst_33422__$1);

(statearr_33598[(14)] = inst_33421__$1);

(statearr_33598[(16)] = inst_33424__$1);

(statearr_33598[(17)] = inst_33423__$1);

return statearr_33598;
})();
var statearr_33599_35180 = state_33558__$1;
(statearr_33599_35180[(2)] = null);

(statearr_33599_35180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (21))){
var inst_33474 = (state_33558[(2)]);
var state_33558__$1 = state_33558;
var statearr_33604_35181 = state_33558__$1;
(statearr_33604_35181[(2)] = inst_33474);

(statearr_33604_35181[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (31))){
var inst_33503 = (state_33558[(12)]);
var inst_33508 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33503);
var state_33558__$1 = state_33558;
var statearr_33605_35182 = state_33558__$1;
(statearr_33605_35182[(2)] = inst_33508);

(statearr_33605_35182[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (32))){
var inst_33492 = (state_33558[(19)]);
var inst_33495 = (state_33558[(9)]);
var inst_33494 = (state_33558[(20)]);
var inst_33493 = (state_33558[(11)]);
var inst_33510 = (state_33558[(2)]);
var inst_33511 = (inst_33495 + (1));
var tmp33600 = inst_33492;
var tmp33601 = inst_33494;
var tmp33602 = inst_33493;
var inst_33492__$1 = tmp33600;
var inst_33493__$1 = tmp33602;
var inst_33494__$1 = tmp33601;
var inst_33495__$1 = inst_33511;
var state_33558__$1 = (function (){var statearr_33606 = state_33558;
(statearr_33606[(19)] = inst_33492__$1);

(statearr_33606[(9)] = inst_33495__$1);

(statearr_33606[(21)] = inst_33510);

(statearr_33606[(20)] = inst_33494__$1);

(statearr_33606[(11)] = inst_33493__$1);

return statearr_33606;
})();
var statearr_33607_35188 = state_33558__$1;
(statearr_33607_35188[(2)] = null);

(statearr_33607_35188[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (40))){
var inst_33523 = (state_33558[(22)]);
var inst_33530 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33523);
var state_33558__$1 = state_33558;
var statearr_33612_35189 = state_33558__$1;
(statearr_33612_35189[(2)] = inst_33530);

(statearr_33612_35189[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (33))){
var inst_33514 = (state_33558[(23)]);
var inst_33516 = cljs.core.chunked_seq_QMARK_(inst_33514);
var state_33558__$1 = state_33558;
if(inst_33516){
var statearr_33617_35192 = state_33558__$1;
(statearr_33617_35192[(1)] = (36));

} else {
var statearr_33618_35193 = state_33558__$1;
(statearr_33618_35193[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (13))){
var inst_33436 = (state_33558[(24)]);
var inst_33440 = cljs.core.async.close_BANG_(inst_33436);
var state_33558__$1 = state_33558;
var statearr_33619_35196 = state_33558__$1;
(statearr_33619_35196[(2)] = inst_33440);

(statearr_33619_35196[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (22))){
var inst_33463 = (state_33558[(8)]);
var inst_33467 = cljs.core.async.close_BANG_(inst_33463);
var state_33558__$1 = state_33558;
var statearr_33623_35197 = state_33558__$1;
(statearr_33623_35197[(2)] = inst_33467);

(statearr_33623_35197[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (36))){
var inst_33514 = (state_33558[(23)]);
var inst_33518 = cljs.core.chunk_first(inst_33514);
var inst_33519 = cljs.core.chunk_rest(inst_33514);
var inst_33520 = cljs.core.count(inst_33518);
var inst_33492 = inst_33519;
var inst_33493 = inst_33518;
var inst_33494 = inst_33520;
var inst_33495 = (0);
var state_33558__$1 = (function (){var statearr_33625 = state_33558;
(statearr_33625[(19)] = inst_33492);

(statearr_33625[(9)] = inst_33495);

(statearr_33625[(20)] = inst_33494);

(statearr_33625[(11)] = inst_33493);

return statearr_33625;
})();
var statearr_33626_35198 = state_33558__$1;
(statearr_33626_35198[(2)] = null);

(statearr_33626_35198[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (41))){
var inst_33514 = (state_33558[(23)]);
var inst_33532 = (state_33558[(2)]);
var inst_33533 = cljs.core.next(inst_33514);
var inst_33492 = inst_33533;
var inst_33493 = null;
var inst_33494 = (0);
var inst_33495 = (0);
var state_33558__$1 = (function (){var statearr_33631 = state_33558;
(statearr_33631[(19)] = inst_33492);

(statearr_33631[(9)] = inst_33495);

(statearr_33631[(20)] = inst_33494);

(statearr_33631[(25)] = inst_33532);

(statearr_33631[(11)] = inst_33493);

return statearr_33631;
})();
var statearr_33632_35206 = state_33558__$1;
(statearr_33632_35206[(2)] = null);

(statearr_33632_35206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (43))){
var state_33558__$1 = state_33558;
var statearr_33633_35207 = state_33558__$1;
(statearr_33633_35207[(2)] = null);

(statearr_33633_35207[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (29))){
var inst_33542 = (state_33558[(2)]);
var state_33558__$1 = state_33558;
var statearr_33638_35208 = state_33558__$1;
(statearr_33638_35208[(2)] = inst_33542);

(statearr_33638_35208[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (44))){
var inst_33551 = (state_33558[(2)]);
var state_33558__$1 = (function (){var statearr_33639 = state_33558;
(statearr_33639[(26)] = inst_33551);

return statearr_33639;
})();
var statearr_33640_35215 = state_33558__$1;
(statearr_33640_35215[(2)] = null);

(statearr_33640_35215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (6))){
var inst_33484 = (state_33558[(27)]);
var inst_33483 = cljs.core.deref(cs);
var inst_33484__$1 = cljs.core.keys(inst_33483);
var inst_33485 = cljs.core.count(inst_33484__$1);
var inst_33486 = cljs.core.reset_BANG_(dctr,inst_33485);
var inst_33491 = cljs.core.seq(inst_33484__$1);
var inst_33492 = inst_33491;
var inst_33493 = null;
var inst_33494 = (0);
var inst_33495 = (0);
var state_33558__$1 = (function (){var statearr_33641 = state_33558;
(statearr_33641[(19)] = inst_33492);

(statearr_33641[(9)] = inst_33495);

(statearr_33641[(28)] = inst_33486);

(statearr_33641[(20)] = inst_33494);

(statearr_33641[(11)] = inst_33493);

(statearr_33641[(27)] = inst_33484__$1);

return statearr_33641;
})();
var statearr_33642_35233 = state_33558__$1;
(statearr_33642_35233[(2)] = null);

(statearr_33642_35233[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (28))){
var inst_33514 = (state_33558[(23)]);
var inst_33492 = (state_33558[(19)]);
var inst_33514__$1 = cljs.core.seq(inst_33492);
var state_33558__$1 = (function (){var statearr_33643 = state_33558;
(statearr_33643[(23)] = inst_33514__$1);

return statearr_33643;
})();
if(inst_33514__$1){
var statearr_33644_35234 = state_33558__$1;
(statearr_33644_35234[(1)] = (33));

} else {
var statearr_33645_35235 = state_33558__$1;
(statearr_33645_35235[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (25))){
var inst_33495 = (state_33558[(9)]);
var inst_33494 = (state_33558[(20)]);
var inst_33500 = (inst_33495 < inst_33494);
var inst_33501 = inst_33500;
var state_33558__$1 = state_33558;
if(cljs.core.truth_(inst_33501)){
var statearr_33650_35236 = state_33558__$1;
(statearr_33650_35236[(1)] = (27));

} else {
var statearr_33651_35237 = state_33558__$1;
(statearr_33651_35237[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (34))){
var state_33558__$1 = state_33558;
var statearr_33652_35242 = state_33558__$1;
(statearr_33652_35242[(2)] = null);

(statearr_33652_35242[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (17))){
var state_33558__$1 = state_33558;
var statearr_33654_35246 = state_33558__$1;
(statearr_33654_35246[(2)] = null);

(statearr_33654_35246[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (3))){
var inst_33556 = (state_33558[(2)]);
var state_33558__$1 = state_33558;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33558__$1,inst_33556);
} else {
if((state_val_33559 === (12))){
var inst_33479 = (state_33558[(2)]);
var state_33558__$1 = state_33558;
var statearr_33655_35247 = state_33558__$1;
(statearr_33655_35247[(2)] = inst_33479);

(statearr_33655_35247[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (2))){
var state_33558__$1 = state_33558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33558__$1,(4),ch);
} else {
if((state_val_33559 === (23))){
var state_33558__$1 = state_33558;
var statearr_33656_35248 = state_33558__$1;
(statearr_33656_35248[(2)] = null);

(statearr_33656_35248[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (35))){
var inst_33539 = (state_33558[(2)]);
var state_33558__$1 = state_33558;
var statearr_33657_35253 = state_33558__$1;
(statearr_33657_35253[(2)] = inst_33539);

(statearr_33657_35253[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (19))){
var inst_33447 = (state_33558[(7)]);
var inst_33451 = cljs.core.chunk_first(inst_33447);
var inst_33452 = cljs.core.chunk_rest(inst_33447);
var inst_33453 = cljs.core.count(inst_33451);
var inst_33421 = inst_33452;
var inst_33422 = inst_33451;
var inst_33423 = inst_33453;
var inst_33424 = (0);
var state_33558__$1 = (function (){var statearr_33658 = state_33558;
(statearr_33658[(13)] = inst_33422);

(statearr_33658[(14)] = inst_33421);

(statearr_33658[(16)] = inst_33424);

(statearr_33658[(17)] = inst_33423);

return statearr_33658;
})();
var statearr_33659_35264 = state_33558__$1;
(statearr_33659_35264[(2)] = null);

(statearr_33659_35264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (11))){
var inst_33447 = (state_33558[(7)]);
var inst_33421 = (state_33558[(14)]);
var inst_33447__$1 = cljs.core.seq(inst_33421);
var state_33558__$1 = (function (){var statearr_33662 = state_33558;
(statearr_33662[(7)] = inst_33447__$1);

return statearr_33662;
})();
if(inst_33447__$1){
var statearr_33663_35269 = state_33558__$1;
(statearr_33663_35269[(1)] = (16));

} else {
var statearr_33664_35274 = state_33558__$1;
(statearr_33664_35274[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (9))){
var inst_33481 = (state_33558[(2)]);
var state_33558__$1 = state_33558;
var statearr_33665_35283 = state_33558__$1;
(statearr_33665_35283[(2)] = inst_33481);

(statearr_33665_35283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (5))){
var inst_33415 = cljs.core.deref(cs);
var inst_33416 = cljs.core.seq(inst_33415);
var inst_33421 = inst_33416;
var inst_33422 = null;
var inst_33423 = (0);
var inst_33424 = (0);
var state_33558__$1 = (function (){var statearr_33666 = state_33558;
(statearr_33666[(13)] = inst_33422);

(statearr_33666[(14)] = inst_33421);

(statearr_33666[(16)] = inst_33424);

(statearr_33666[(17)] = inst_33423);

return statearr_33666;
})();
var statearr_33667_35298 = state_33558__$1;
(statearr_33667_35298[(2)] = null);

(statearr_33667_35298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (14))){
var state_33558__$1 = state_33558;
var statearr_33668_35299 = state_33558__$1;
(statearr_33668_35299[(2)] = null);

(statearr_33668_35299[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (45))){
var inst_33548 = (state_33558[(2)]);
var state_33558__$1 = state_33558;
var statearr_33669_35300 = state_33558__$1;
(statearr_33669_35300[(2)] = inst_33548);

(statearr_33669_35300[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (26))){
var inst_33484 = (state_33558[(27)]);
var inst_33544 = (state_33558[(2)]);
var inst_33545 = cljs.core.seq(inst_33484);
var state_33558__$1 = (function (){var statearr_33670 = state_33558;
(statearr_33670[(29)] = inst_33544);

return statearr_33670;
})();
if(inst_33545){
var statearr_33671_35307 = state_33558__$1;
(statearr_33671_35307[(1)] = (42));

} else {
var statearr_33672_35311 = state_33558__$1;
(statearr_33672_35311[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (16))){
var inst_33447 = (state_33558[(7)]);
var inst_33449 = cljs.core.chunked_seq_QMARK_(inst_33447);
var state_33558__$1 = state_33558;
if(inst_33449){
var statearr_33673_35312 = state_33558__$1;
(statearr_33673_35312[(1)] = (19));

} else {
var statearr_33674_35313 = state_33558__$1;
(statearr_33674_35313[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (38))){
var inst_33536 = (state_33558[(2)]);
var state_33558__$1 = state_33558;
var statearr_33675_35314 = state_33558__$1;
(statearr_33675_35314[(2)] = inst_33536);

(statearr_33675_35314[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (30))){
var state_33558__$1 = state_33558;
var statearr_33676_35323 = state_33558__$1;
(statearr_33676_35323[(2)] = null);

(statearr_33676_35323[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (10))){
var inst_33422 = (state_33558[(13)]);
var inst_33424 = (state_33558[(16)]);
var inst_33435 = cljs.core._nth(inst_33422,inst_33424);
var inst_33436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33435,(0),null);
var inst_33437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33435,(1),null);
var state_33558__$1 = (function (){var statearr_33677 = state_33558;
(statearr_33677[(24)] = inst_33436);

return statearr_33677;
})();
if(cljs.core.truth_(inst_33437)){
var statearr_33678_35334 = state_33558__$1;
(statearr_33678_35334[(1)] = (13));

} else {
var statearr_33679_35335 = state_33558__$1;
(statearr_33679_35335[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (18))){
var inst_33477 = (state_33558[(2)]);
var state_33558__$1 = state_33558;
var statearr_33680_35336 = state_33558__$1;
(statearr_33680_35336[(2)] = inst_33477);

(statearr_33680_35336[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (42))){
var state_33558__$1 = state_33558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33558__$1,(45),dchan);
} else {
if((state_val_33559 === (37))){
var inst_33514 = (state_33558[(23)]);
var inst_33523 = (state_33558[(22)]);
var inst_33408 = (state_33558[(10)]);
var inst_33523__$1 = cljs.core.first(inst_33514);
var inst_33527 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33523__$1,inst_33408,done);
var state_33558__$1 = (function (){var statearr_33681 = state_33558;
(statearr_33681[(22)] = inst_33523__$1);

return statearr_33681;
})();
if(cljs.core.truth_(inst_33527)){
var statearr_33682_35346 = state_33558__$1;
(statearr_33682_35346[(1)] = (39));

} else {
var statearr_33683_35347 = state_33558__$1;
(statearr_33683_35347[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (8))){
var inst_33424 = (state_33558[(16)]);
var inst_33423 = (state_33558[(17)]);
var inst_33426 = (inst_33424 < inst_33423);
var inst_33427 = inst_33426;
var state_33558__$1 = state_33558;
if(cljs.core.truth_(inst_33427)){
var statearr_33684_35355 = state_33558__$1;
(statearr_33684_35355[(1)] = (10));

} else {
var statearr_33685_35360 = state_33558__$1;
(statearr_33685_35360[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__32104__auto__ = null;
var cljs$core$async$mult_$_state_machine__32104__auto____0 = (function (){
var statearr_33686 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33686[(0)] = cljs$core$async$mult_$_state_machine__32104__auto__);

(statearr_33686[(1)] = (1));

return statearr_33686;
});
var cljs$core$async$mult_$_state_machine__32104__auto____1 = (function (state_33558){
while(true){
var ret_value__32105__auto__ = (function (){try{while(true){
var result__32106__auto__ = switch__32103__auto__(state_33558);
if(cljs.core.keyword_identical_QMARK_(result__32106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32106__auto__;
}
break;
}
}catch (e33687){var ex__32107__auto__ = e33687;
var statearr_33688_35363 = state_33558;
(statearr_33688_35363[(2)] = ex__32107__auto__);


if(cljs.core.seq((state_33558[(4)]))){
var statearr_33689_35364 = state_33558;
(statearr_33689_35364[(1)] = cljs.core.first((state_33558[(4)])));

} else {
throw ex__32107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35366 = state_33558;
state_33558 = G__35366;
continue;
} else {
return ret_value__32105__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32104__auto__ = function(state_33558){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32104__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32104__auto____1.call(this,state_33558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32104__auto____0;
cljs$core$async$mult_$_state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32104__auto____1;
return cljs$core$async$mult_$_state_machine__32104__auto__;
})()
})();
var state__32624__auto__ = (function (){var statearr_33692 = f__32623__auto__();
(statearr_33692[(6)] = c__32622__auto___35150);

return statearr_33692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32624__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33694 = arguments.length;
switch (G__33694) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_35373 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35373(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35376 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35376(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35377 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35377(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35388 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35388(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35391 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35391(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___35393 = arguments.length;
var i__4865__auto___35394 = (0);
while(true){
if((i__4865__auto___35394 < len__4864__auto___35393)){
args__4870__auto__.push((arguments[i__4865__auto___35394]));

var G__35395 = (i__4865__auto___35394 + (1));
i__4865__auto___35394 = G__35395;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33712){
var map__33713 = p__33712;
var map__33713__$1 = cljs.core.__destructure_map(map__33713);
var opts = map__33713__$1;
var statearr_33714_35397 = state;
(statearr_33714_35397[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33717_35398 = state;
(statearr_33717_35398[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_33718_35399 = state;
(statearr_33718_35399[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33705){
var G__33706 = cljs.core.first(seq33705);
var seq33705__$1 = cljs.core.next(seq33705);
var G__33707 = cljs.core.first(seq33705__$1);
var seq33705__$2 = cljs.core.next(seq33705__$1);
var G__33708 = cljs.core.first(seq33705__$2);
var seq33705__$3 = cljs.core.next(seq33705__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33706,G__33707,G__33708,seq33705__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33738 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33738 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33742){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33742 = meta33742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33743,meta33742__$1){
var self__ = this;
var _33743__$1 = this;
return (new cljs.core.async.t_cljs$core$async33738(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33742__$1));
}));

(cljs.core.async.t_cljs$core$async33738.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33743){
var self__ = this;
var _33743__$1 = this;
return self__.meta33742;
}));

(cljs.core.async.t_cljs$core$async33738.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33738.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33738.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33738.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33738.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33738.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33738.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33738.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33738.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33742","meta33742",-497414680,null)], null);
}));

(cljs.core.async.t_cljs$core$async33738.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33738.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33738");

(cljs.core.async.t_cljs$core$async33738.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33738");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33738.
 */
cljs.core.async.__GT_t_cljs$core$async33738 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33738(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33742){
return (new cljs.core.async.t_cljs$core$async33738(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33742));
});

}

return (new cljs.core.async.t_cljs$core$async33738(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32622__auto___35415 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32623__auto__ = (function (){var switch__32103__auto__ = (function (state_33828){
var state_val_33829 = (state_33828[(1)]);
if((state_val_33829 === (7))){
var inst_33788 = (state_33828[(2)]);
var state_33828__$1 = state_33828;
if(cljs.core.truth_(inst_33788)){
var statearr_33834_35425 = state_33828__$1;
(statearr_33834_35425[(1)] = (8));

} else {
var statearr_33835_35426 = state_33828__$1;
(statearr_33835_35426[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (20))){
var inst_33781 = (state_33828[(7)]);
var state_33828__$1 = state_33828;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33828__$1,(23),out,inst_33781);
} else {
if((state_val_33829 === (1))){
var inst_33764 = calc_state();
var inst_33765 = cljs.core.__destructure_map(inst_33764);
var inst_33766 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33765,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33767 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33765,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33768 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33765,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33769 = inst_33764;
var state_33828__$1 = (function (){var statearr_33838 = state_33828;
(statearr_33838[(8)] = inst_33769);

(statearr_33838[(9)] = inst_33767);

(statearr_33838[(10)] = inst_33768);

(statearr_33838[(11)] = inst_33766);

return statearr_33838;
})();
var statearr_33839_35441 = state_33828__$1;
(statearr_33839_35441[(2)] = null);

(statearr_33839_35441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (24))){
var inst_33772 = (state_33828[(12)]);
var inst_33769 = inst_33772;
var state_33828__$1 = (function (){var statearr_33841 = state_33828;
(statearr_33841[(8)] = inst_33769);

return statearr_33841;
})();
var statearr_33842_35448 = state_33828__$1;
(statearr_33842_35448[(2)] = null);

(statearr_33842_35448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (4))){
var inst_33783 = (state_33828[(13)]);
var inst_33781 = (state_33828[(7)]);
var inst_33780 = (state_33828[(2)]);
var inst_33781__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33780,(0),null);
var inst_33782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33780,(1),null);
var inst_33783__$1 = (inst_33781__$1 == null);
var state_33828__$1 = (function (){var statearr_33844 = state_33828;
(statearr_33844[(14)] = inst_33782);

(statearr_33844[(13)] = inst_33783__$1);

(statearr_33844[(7)] = inst_33781__$1);

return statearr_33844;
})();
if(cljs.core.truth_(inst_33783__$1)){
var statearr_33845_35455 = state_33828__$1;
(statearr_33845_35455[(1)] = (5));

} else {
var statearr_33846_35456 = state_33828__$1;
(statearr_33846_35456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (15))){
var inst_33773 = (state_33828[(15)]);
var inst_33802 = (state_33828[(16)]);
var inst_33802__$1 = cljs.core.empty_QMARK_(inst_33773);
var state_33828__$1 = (function (){var statearr_33847 = state_33828;
(statearr_33847[(16)] = inst_33802__$1);

return statearr_33847;
})();
if(inst_33802__$1){
var statearr_33848_35457 = state_33828__$1;
(statearr_33848_35457[(1)] = (17));

} else {
var statearr_33849_35458 = state_33828__$1;
(statearr_33849_35458[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (21))){
var inst_33772 = (state_33828[(12)]);
var inst_33769 = inst_33772;
var state_33828__$1 = (function (){var statearr_33850 = state_33828;
(statearr_33850[(8)] = inst_33769);

return statearr_33850;
})();
var statearr_33851_35459 = state_33828__$1;
(statearr_33851_35459[(2)] = null);

(statearr_33851_35459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (13))){
var inst_33795 = (state_33828[(2)]);
var inst_33796 = calc_state();
var inst_33769 = inst_33796;
var state_33828__$1 = (function (){var statearr_33852 = state_33828;
(statearr_33852[(8)] = inst_33769);

(statearr_33852[(17)] = inst_33795);

return statearr_33852;
})();
var statearr_33853_35465 = state_33828__$1;
(statearr_33853_35465[(2)] = null);

(statearr_33853_35465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (22))){
var inst_33822 = (state_33828[(2)]);
var state_33828__$1 = state_33828;
var statearr_33854_35466 = state_33828__$1;
(statearr_33854_35466[(2)] = inst_33822);

(statearr_33854_35466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (6))){
var inst_33782 = (state_33828[(14)]);
var inst_33786 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33782,change);
var state_33828__$1 = state_33828;
var statearr_33855_35467 = state_33828__$1;
(statearr_33855_35467[(2)] = inst_33786);

(statearr_33855_35467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (25))){
var state_33828__$1 = state_33828;
var statearr_33857_35468 = state_33828__$1;
(statearr_33857_35468[(2)] = null);

(statearr_33857_35468[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (17))){
var inst_33782 = (state_33828[(14)]);
var inst_33774 = (state_33828[(18)]);
var inst_33804 = (inst_33774.cljs$core$IFn$_invoke$arity$1 ? inst_33774.cljs$core$IFn$_invoke$arity$1(inst_33782) : inst_33774.call(null,inst_33782));
var inst_33805 = cljs.core.not(inst_33804);
var state_33828__$1 = state_33828;
var statearr_33859_35470 = state_33828__$1;
(statearr_33859_35470[(2)] = inst_33805);

(statearr_33859_35470[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (3))){
var inst_33826 = (state_33828[(2)]);
var state_33828__$1 = state_33828;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33828__$1,inst_33826);
} else {
if((state_val_33829 === (12))){
var state_33828__$1 = state_33828;
var statearr_33860_35472 = state_33828__$1;
(statearr_33860_35472[(2)] = null);

(statearr_33860_35472[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (2))){
var inst_33769 = (state_33828[(8)]);
var inst_33772 = (state_33828[(12)]);
var inst_33772__$1 = cljs.core.__destructure_map(inst_33769);
var inst_33773 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33772__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33772__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33775 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33772__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33828__$1 = (function (){var statearr_33863 = state_33828;
(statearr_33863[(15)] = inst_33773);

(statearr_33863[(12)] = inst_33772__$1);

(statearr_33863[(18)] = inst_33774);

return statearr_33863;
})();
return cljs.core.async.ioc_alts_BANG_(state_33828__$1,(4),inst_33775);
} else {
if((state_val_33829 === (23))){
var inst_33813 = (state_33828[(2)]);
var state_33828__$1 = state_33828;
if(cljs.core.truth_(inst_33813)){
var statearr_33867_35473 = state_33828__$1;
(statearr_33867_35473[(1)] = (24));

} else {
var statearr_33868_35474 = state_33828__$1;
(statearr_33868_35474[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (19))){
var inst_33808 = (state_33828[(2)]);
var state_33828__$1 = state_33828;
var statearr_33869_35475 = state_33828__$1;
(statearr_33869_35475[(2)] = inst_33808);

(statearr_33869_35475[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (11))){
var inst_33782 = (state_33828[(14)]);
var inst_33792 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33782);
var state_33828__$1 = state_33828;
var statearr_33870_35480 = state_33828__$1;
(statearr_33870_35480[(2)] = inst_33792);

(statearr_33870_35480[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (9))){
var inst_33799 = (state_33828[(19)]);
var inst_33782 = (state_33828[(14)]);
var inst_33773 = (state_33828[(15)]);
var inst_33799__$1 = (inst_33773.cljs$core$IFn$_invoke$arity$1 ? inst_33773.cljs$core$IFn$_invoke$arity$1(inst_33782) : inst_33773.call(null,inst_33782));
var state_33828__$1 = (function (){var statearr_33871 = state_33828;
(statearr_33871[(19)] = inst_33799__$1);

return statearr_33871;
})();
if(cljs.core.truth_(inst_33799__$1)){
var statearr_33872_35491 = state_33828__$1;
(statearr_33872_35491[(1)] = (14));

} else {
var statearr_33873_35496 = state_33828__$1;
(statearr_33873_35496[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (5))){
var inst_33783 = (state_33828[(13)]);
var state_33828__$1 = state_33828;
var statearr_33874_35502 = state_33828__$1;
(statearr_33874_35502[(2)] = inst_33783);

(statearr_33874_35502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (14))){
var inst_33799 = (state_33828[(19)]);
var state_33828__$1 = state_33828;
var statearr_33875_35504 = state_33828__$1;
(statearr_33875_35504[(2)] = inst_33799);

(statearr_33875_35504[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (26))){
var inst_33818 = (state_33828[(2)]);
var state_33828__$1 = state_33828;
var statearr_33876_35505 = state_33828__$1;
(statearr_33876_35505[(2)] = inst_33818);

(statearr_33876_35505[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (16))){
var inst_33810 = (state_33828[(2)]);
var state_33828__$1 = state_33828;
if(cljs.core.truth_(inst_33810)){
var statearr_33877_35506 = state_33828__$1;
(statearr_33877_35506[(1)] = (20));

} else {
var statearr_33878_35507 = state_33828__$1;
(statearr_33878_35507[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (10))){
var inst_33824 = (state_33828[(2)]);
var state_33828__$1 = state_33828;
var statearr_33879_35508 = state_33828__$1;
(statearr_33879_35508[(2)] = inst_33824);

(statearr_33879_35508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (18))){
var inst_33802 = (state_33828[(16)]);
var state_33828__$1 = state_33828;
var statearr_33880_35513 = state_33828__$1;
(statearr_33880_35513[(2)] = inst_33802);

(statearr_33880_35513[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (8))){
var inst_33781 = (state_33828[(7)]);
var inst_33790 = (inst_33781 == null);
var state_33828__$1 = state_33828;
if(cljs.core.truth_(inst_33790)){
var statearr_33881_35521 = state_33828__$1;
(statearr_33881_35521[(1)] = (11));

} else {
var statearr_33882_35522 = state_33828__$1;
(statearr_33882_35522[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__32104__auto__ = null;
var cljs$core$async$mix_$_state_machine__32104__auto____0 = (function (){
var statearr_33883 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33883[(0)] = cljs$core$async$mix_$_state_machine__32104__auto__);

(statearr_33883[(1)] = (1));

return statearr_33883;
});
var cljs$core$async$mix_$_state_machine__32104__auto____1 = (function (state_33828){
while(true){
var ret_value__32105__auto__ = (function (){try{while(true){
var result__32106__auto__ = switch__32103__auto__(state_33828);
if(cljs.core.keyword_identical_QMARK_(result__32106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32106__auto__;
}
break;
}
}catch (e33884){var ex__32107__auto__ = e33884;
var statearr_33885_35534 = state_33828;
(statearr_33885_35534[(2)] = ex__32107__auto__);


if(cljs.core.seq((state_33828[(4)]))){
var statearr_33886_35541 = state_33828;
(statearr_33886_35541[(1)] = cljs.core.first((state_33828[(4)])));

} else {
throw ex__32107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35542 = state_33828;
state_33828 = G__35542;
continue;
} else {
return ret_value__32105__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32104__auto__ = function(state_33828){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32104__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32104__auto____1.call(this,state_33828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32104__auto____0;
cljs$core$async$mix_$_state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32104__auto____1;
return cljs$core$async$mix_$_state_machine__32104__auto__;
})()
})();
var state__32624__auto__ = (function (){var statearr_33892 = f__32623__auto__();
(statearr_33892[(6)] = c__32622__auto___35415);

return statearr_33892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32624__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35550 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35550(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35566 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35566(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35573 = (function() {
var G__35574 = null;
var G__35574__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35574__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35574 = function(p,v){
switch(arguments.length){
case 1:
return G__35574__1.call(this,p);
case 2:
return G__35574__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35574.cljs$core$IFn$_invoke$arity$1 = G__35574__1;
G__35574.cljs$core$IFn$_invoke$arity$2 = G__35574__2;
return G__35574;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33905 = arguments.length;
switch (G__33905) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35573(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35573(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33912 = arguments.length;
switch (G__33912) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33910_SHARP_){
if(cljs.core.truth_((p1__33910_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33910_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33910_SHARP_.call(null,topic)))){
return p1__33910_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33910_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33914 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33914 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33915){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33915 = meta33915;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33916,meta33915__$1){
var self__ = this;
var _33916__$1 = this;
return (new cljs.core.async.t_cljs$core$async33914(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33915__$1));
}));

(cljs.core.async.t_cljs$core$async33914.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33916){
var self__ = this;
var _33916__$1 = this;
return self__.meta33915;
}));

(cljs.core.async.t_cljs$core$async33914.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33914.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33914.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33914.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33914.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33914.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33914.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33914.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33915","meta33915",-1662162660,null)], null);
}));

(cljs.core.async.t_cljs$core$async33914.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33914.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33914");

(cljs.core.async.t_cljs$core$async33914.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33914");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33914.
 */
cljs.core.async.__GT_t_cljs$core$async33914 = (function cljs$core$async$__GT_t_cljs$core$async33914(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33915){
return (new cljs.core.async.t_cljs$core$async33914(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33915));
});

}

return (new cljs.core.async.t_cljs$core$async33914(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32622__auto___35590 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32623__auto__ = (function (){var switch__32103__auto__ = (function (state_33992){
var state_val_33993 = (state_33992[(1)]);
if((state_val_33993 === (7))){
var inst_33988 = (state_33992[(2)]);
var state_33992__$1 = state_33992;
var statearr_33994_35591 = state_33992__$1;
(statearr_33994_35591[(2)] = inst_33988);

(statearr_33994_35591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33993 === (20))){
var state_33992__$1 = state_33992;
var statearr_33995_35592 = state_33992__$1;
(statearr_33995_35592[(2)] = null);

(statearr_33995_35592[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33993 === (1))){
var state_33992__$1 = state_33992;
var statearr_33996_35593 = state_33992__$1;
(statearr_33996_35593[(2)] = null);

(statearr_33996_35593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33993 === (24))){
var inst_33971 = (state_33992[(7)]);
var inst_33980 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33971);
var state_33992__$1 = state_33992;
var statearr_33997_35594 = state_33992__$1;
(statearr_33997_35594[(2)] = inst_33980);

(statearr_33997_35594[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33993 === (4))){
var inst_33923 = (state_33992[(8)]);
var inst_33923__$1 = (state_33992[(2)]);
var inst_33924 = (inst_33923__$1 == null);
var state_33992__$1 = (function (){var statearr_33998 = state_33992;
(statearr_33998[(8)] = inst_33923__$1);

return statearr_33998;
})();
if(cljs.core.truth_(inst_33924)){
var statearr_33999_35595 = state_33992__$1;
(statearr_33999_35595[(1)] = (5));

} else {
var statearr_34000_35596 = state_33992__$1;
(statearr_34000_35596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33993 === (15))){
var inst_33965 = (state_33992[(2)]);
var state_33992__$1 = state_33992;
var statearr_34001_35597 = state_33992__$1;
(statearr_34001_35597[(2)] = inst_33965);

(statearr_34001_35597[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33993 === (21))){
var inst_33985 = (state_33992[(2)]);
var state_33992__$1 = (function (){var statearr_34002 = state_33992;
(statearr_34002[(9)] = inst_33985);

return statearr_34002;
})();
var statearr_34003_35599 = state_33992__$1;
(statearr_34003_35599[(2)] = null);

(statearr_34003_35599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33993 === (13))){
var inst_33947 = (state_33992[(10)]);
var inst_33949 = cljs.core.chunked_seq_QMARK_(inst_33947);
var state_33992__$1 = state_33992;
if(inst_33949){
var statearr_34004_35600 = state_33992__$1;
(statearr_34004_35600[(1)] = (16));

} else {
var statearr_34005_35601 = state_33992__$1;
(statearr_34005_35601[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33993 === (22))){
var inst_33977 = (state_33992[(2)]);
var state_33992__$1 = state_33992;
if(cljs.core.truth_(inst_33977)){
var statearr_34006_35602 = state_33992__$1;
(statearr_34006_35602[(1)] = (23));

} else {
var statearr_34007_35603 = state_33992__$1;
(statearr_34007_35603[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33993 === (6))){
var inst_33971 = (state_33992[(7)]);
var inst_33973 = (state_33992[(11)]);
var inst_33923 = (state_33992[(8)]);
var inst_33971__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33923) : topic_fn.call(null,inst_33923));
var inst_33972 = cljs.core.deref(mults);
var inst_33973__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33972,inst_33971__$1);
var state_33992__$1 = (function (){var statearr_34008 = state_33992;
(statearr_34008[(7)] = inst_33971__$1);

(statearr_34008[(11)] = inst_33973__$1);

return statearr_34008;
})();
if(cljs.core.truth_(inst_33973__$1)){
var statearr_34009_35604 = state_33992__$1;
(statearr_34009_35604[(1)] = (19));

} else {
var statearr_34010_35605 = state_33992__$1;
(statearr_34010_35605[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33993 === (25))){
var inst_33982 = (state_33992[(2)]);
var state_33992__$1 = state_33992;
var statearr_34011_35606 = state_33992__$1;
(statearr_34011_35606[(2)] = inst_33982);

(statearr_34011_35606[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33993 === (17))){
var inst_33947 = (state_33992[(10)]);
var inst_33956 = cljs.core.first(inst_33947);
var inst_33957 = cljs.core.async.muxch_STAR_(inst_33956);
var inst_33958 = cljs.core.async.close_BANG_(inst_33957);
var inst_33959 = cljs.core.next(inst_33947);
var inst_33933 = inst_33959;
var inst_33934 = null;
var inst_33935 = (0);
var inst_33936 = (0);
var state_33992__$1 = (function (){var statearr_34012 = state_33992;
(statearr_34012[(12)] = inst_33958);

(statearr_34012[(13)] = inst_33934);

(statearr_34012[(14)] = inst_33935);

(statearr_34012[(15)] = inst_33936);

(statearr_34012[(16)] = inst_33933);

return statearr_34012;
})();
var statearr_34014_35621 = state_33992__$1;
(statearr_34014_35621[(2)] = null);

(statearr_34014_35621[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33993 === (3))){
var inst_33990 = (state_33992[(2)]);
var state_33992__$1 = state_33992;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33992__$1,inst_33990);
} else {
if((state_val_33993 === (12))){
var inst_33967 = (state_33992[(2)]);
var state_33992__$1 = state_33992;
var statearr_34015_35622 = state_33992__$1;
(statearr_34015_35622[(2)] = inst_33967);

(statearr_34015_35622[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33993 === (2))){
var state_33992__$1 = state_33992;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33992__$1,(4),ch);
} else {
if((state_val_33993 === (23))){
var state_33992__$1 = state_33992;
var statearr_34016_35625 = state_33992__$1;
(statearr_34016_35625[(2)] = null);

(statearr_34016_35625[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33993 === (19))){
var inst_33973 = (state_33992[(11)]);
var inst_33923 = (state_33992[(8)]);
var inst_33975 = cljs.core.async.muxch_STAR_(inst_33973);
var state_33992__$1 = state_33992;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33992__$1,(22),inst_33975,inst_33923);
} else {
if((state_val_33993 === (11))){
var inst_33947 = (state_33992[(10)]);
var inst_33933 = (state_33992[(16)]);
var inst_33947__$1 = cljs.core.seq(inst_33933);
var state_33992__$1 = (function (){var statearr_34017 = state_33992;
(statearr_34017[(10)] = inst_33947__$1);

return statearr_34017;
})();
if(inst_33947__$1){
var statearr_34018_35630 = state_33992__$1;
(statearr_34018_35630[(1)] = (13));

} else {
var statearr_34019_35631 = state_33992__$1;
(statearr_34019_35631[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33993 === (9))){
var inst_33969 = (state_33992[(2)]);
var state_33992__$1 = state_33992;
var statearr_34023_35634 = state_33992__$1;
(statearr_34023_35634[(2)] = inst_33969);

(statearr_34023_35634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33993 === (5))){
var inst_33930 = cljs.core.deref(mults);
var inst_33931 = cljs.core.vals(inst_33930);
var inst_33932 = cljs.core.seq(inst_33931);
var inst_33933 = inst_33932;
var inst_33934 = null;
var inst_33935 = (0);
var inst_33936 = (0);
var state_33992__$1 = (function (){var statearr_34024 = state_33992;
(statearr_34024[(13)] = inst_33934);

(statearr_34024[(14)] = inst_33935);

(statearr_34024[(15)] = inst_33936);

(statearr_34024[(16)] = inst_33933);

return statearr_34024;
})();
var statearr_34025_35643 = state_33992__$1;
(statearr_34025_35643[(2)] = null);

(statearr_34025_35643[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33993 === (14))){
var state_33992__$1 = state_33992;
var statearr_34029_35644 = state_33992__$1;
(statearr_34029_35644[(2)] = null);

(statearr_34029_35644[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33993 === (16))){
var inst_33947 = (state_33992[(10)]);
var inst_33951 = cljs.core.chunk_first(inst_33947);
var inst_33952 = cljs.core.chunk_rest(inst_33947);
var inst_33953 = cljs.core.count(inst_33951);
var inst_33933 = inst_33952;
var inst_33934 = inst_33951;
var inst_33935 = inst_33953;
var inst_33936 = (0);
var state_33992__$1 = (function (){var statearr_34030 = state_33992;
(statearr_34030[(13)] = inst_33934);

(statearr_34030[(14)] = inst_33935);

(statearr_34030[(15)] = inst_33936);

(statearr_34030[(16)] = inst_33933);

return statearr_34030;
})();
var statearr_34031_35648 = state_33992__$1;
(statearr_34031_35648[(2)] = null);

(statearr_34031_35648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33993 === (10))){
var inst_33934 = (state_33992[(13)]);
var inst_33935 = (state_33992[(14)]);
var inst_33936 = (state_33992[(15)]);
var inst_33933 = (state_33992[(16)]);
var inst_33941 = cljs.core._nth(inst_33934,inst_33936);
var inst_33942 = cljs.core.async.muxch_STAR_(inst_33941);
var inst_33943 = cljs.core.async.close_BANG_(inst_33942);
var inst_33944 = (inst_33936 + (1));
var tmp34026 = inst_33934;
var tmp34027 = inst_33935;
var tmp34028 = inst_33933;
var inst_33933__$1 = tmp34028;
var inst_33934__$1 = tmp34026;
var inst_33935__$1 = tmp34027;
var inst_33936__$1 = inst_33944;
var state_33992__$1 = (function (){var statearr_34036 = state_33992;
(statearr_34036[(13)] = inst_33934__$1);

(statearr_34036[(17)] = inst_33943);

(statearr_34036[(14)] = inst_33935__$1);

(statearr_34036[(15)] = inst_33936__$1);

(statearr_34036[(16)] = inst_33933__$1);

return statearr_34036;
})();
var statearr_34037_35653 = state_33992__$1;
(statearr_34037_35653[(2)] = null);

(statearr_34037_35653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33993 === (18))){
var inst_33962 = (state_33992[(2)]);
var state_33992__$1 = state_33992;
var statearr_34038_35654 = state_33992__$1;
(statearr_34038_35654[(2)] = inst_33962);

(statearr_34038_35654[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33993 === (8))){
var inst_33935 = (state_33992[(14)]);
var inst_33936 = (state_33992[(15)]);
var inst_33938 = (inst_33936 < inst_33935);
var inst_33939 = inst_33938;
var state_33992__$1 = state_33992;
if(cljs.core.truth_(inst_33939)){
var statearr_34039_35655 = state_33992__$1;
(statearr_34039_35655[(1)] = (10));

} else {
var statearr_34040_35656 = state_33992__$1;
(statearr_34040_35656[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32104__auto__ = null;
var cljs$core$async$state_machine__32104__auto____0 = (function (){
var statearr_34041 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34041[(0)] = cljs$core$async$state_machine__32104__auto__);

(statearr_34041[(1)] = (1));

return statearr_34041;
});
var cljs$core$async$state_machine__32104__auto____1 = (function (state_33992){
while(true){
var ret_value__32105__auto__ = (function (){try{while(true){
var result__32106__auto__ = switch__32103__auto__(state_33992);
if(cljs.core.keyword_identical_QMARK_(result__32106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32106__auto__;
}
break;
}
}catch (e34042){var ex__32107__auto__ = e34042;
var statearr_34043_35658 = state_33992;
(statearr_34043_35658[(2)] = ex__32107__auto__);


if(cljs.core.seq((state_33992[(4)]))){
var statearr_34044_35659 = state_33992;
(statearr_34044_35659[(1)] = cljs.core.first((state_33992[(4)])));

} else {
throw ex__32107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35660 = state_33992;
state_33992 = G__35660;
continue;
} else {
return ret_value__32105__auto__;
}
break;
}
});
cljs$core$async$state_machine__32104__auto__ = function(state_33992){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32104__auto____1.call(this,state_33992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32104__auto____0;
cljs$core$async$state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32104__auto____1;
return cljs$core$async$state_machine__32104__auto__;
})()
})();
var state__32624__auto__ = (function (){var statearr_34045 = f__32623__auto__();
(statearr_34045[(6)] = c__32622__auto___35590);

return statearr_34045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32624__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34047 = arguments.length;
switch (G__34047) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34069 = arguments.length;
switch (G__34069) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34085 = arguments.length;
switch (G__34085) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__32622__auto___35668 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32623__auto__ = (function (){var switch__32103__auto__ = (function (state_34140){
var state_val_34141 = (state_34140[(1)]);
if((state_val_34141 === (7))){
var state_34140__$1 = state_34140;
var statearr_34142_35669 = state_34140__$1;
(statearr_34142_35669[(2)] = null);

(statearr_34142_35669[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (1))){
var state_34140__$1 = state_34140;
var statearr_34143_35670 = state_34140__$1;
(statearr_34143_35670[(2)] = null);

(statearr_34143_35670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (4))){
var inst_34098 = (state_34140[(7)]);
var inst_34097 = (state_34140[(8)]);
var inst_34100 = (inst_34098 < inst_34097);
var state_34140__$1 = state_34140;
if(cljs.core.truth_(inst_34100)){
var statearr_34144_35671 = state_34140__$1;
(statearr_34144_35671[(1)] = (6));

} else {
var statearr_34145_35672 = state_34140__$1;
(statearr_34145_35672[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (15))){
var inst_34126 = (state_34140[(9)]);
var inst_34131 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34126);
var state_34140__$1 = state_34140;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34140__$1,(17),out,inst_34131);
} else {
if((state_val_34141 === (13))){
var inst_34126 = (state_34140[(9)]);
var inst_34126__$1 = (state_34140[(2)]);
var inst_34127 = cljs.core.some(cljs.core.nil_QMARK_,inst_34126__$1);
var state_34140__$1 = (function (){var statearr_34146 = state_34140;
(statearr_34146[(9)] = inst_34126__$1);

return statearr_34146;
})();
if(cljs.core.truth_(inst_34127)){
var statearr_34147_35673 = state_34140__$1;
(statearr_34147_35673[(1)] = (14));

} else {
var statearr_34148_35674 = state_34140__$1;
(statearr_34148_35674[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (6))){
var state_34140__$1 = state_34140;
var statearr_34149_35675 = state_34140__$1;
(statearr_34149_35675[(2)] = null);

(statearr_34149_35675[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (17))){
var inst_34133 = (state_34140[(2)]);
var state_34140__$1 = (function (){var statearr_34151 = state_34140;
(statearr_34151[(10)] = inst_34133);

return statearr_34151;
})();
var statearr_34152_35676 = state_34140__$1;
(statearr_34152_35676[(2)] = null);

(statearr_34152_35676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (3))){
var inst_34138 = (state_34140[(2)]);
var state_34140__$1 = state_34140;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34140__$1,inst_34138);
} else {
if((state_val_34141 === (12))){
var _ = (function (){var statearr_34153 = state_34140;
(statearr_34153[(4)] = cljs.core.rest((state_34140[(4)])));

return statearr_34153;
})();
var state_34140__$1 = state_34140;
var ex34150 = (state_34140__$1[(2)]);
var statearr_34154_35677 = state_34140__$1;
(statearr_34154_35677[(5)] = ex34150);


if((ex34150 instanceof Object)){
var statearr_34155_35678 = state_34140__$1;
(statearr_34155_35678[(1)] = (11));

(statearr_34155_35678[(5)] = null);

} else {
throw ex34150;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (2))){
var inst_34096 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34097 = cnt;
var inst_34098 = (0);
var state_34140__$1 = (function (){var statearr_34156 = state_34140;
(statearr_34156[(7)] = inst_34098);

(statearr_34156[(8)] = inst_34097);

(statearr_34156[(11)] = inst_34096);

return statearr_34156;
})();
var statearr_34157_35680 = state_34140__$1;
(statearr_34157_35680[(2)] = null);

(statearr_34157_35680[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (11))){
var inst_34102 = (state_34140[(2)]);
var inst_34103 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34140__$1 = (function (){var statearr_34158 = state_34140;
(statearr_34158[(12)] = inst_34102);

return statearr_34158;
})();
var statearr_34159_35685 = state_34140__$1;
(statearr_34159_35685[(2)] = inst_34103);

(statearr_34159_35685[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (9))){
var inst_34098 = (state_34140[(7)]);
var _ = (function (){var statearr_34160 = state_34140;
(statearr_34160[(4)] = cljs.core.cons((12),(state_34140[(4)])));

return statearr_34160;
})();
var inst_34109 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34098) : chs__$1.call(null,inst_34098));
var inst_34110 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34098) : done.call(null,inst_34098));
var inst_34111 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34109,inst_34110);
var ___$1 = (function (){var statearr_34161 = state_34140;
(statearr_34161[(4)] = cljs.core.rest((state_34140[(4)])));

return statearr_34161;
})();
var state_34140__$1 = state_34140;
var statearr_34162_35691 = state_34140__$1;
(statearr_34162_35691[(2)] = inst_34111);

(statearr_34162_35691[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (5))){
var inst_34121 = (state_34140[(2)]);
var state_34140__$1 = (function (){var statearr_34163 = state_34140;
(statearr_34163[(13)] = inst_34121);

return statearr_34163;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34140__$1,(13),dchan);
} else {
if((state_val_34141 === (14))){
var inst_34129 = cljs.core.async.close_BANG_(out);
var state_34140__$1 = state_34140;
var statearr_34164_35695 = state_34140__$1;
(statearr_34164_35695[(2)] = inst_34129);

(statearr_34164_35695[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (16))){
var inst_34136 = (state_34140[(2)]);
var state_34140__$1 = state_34140;
var statearr_34165_35697 = state_34140__$1;
(statearr_34165_35697[(2)] = inst_34136);

(statearr_34165_35697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (10))){
var inst_34098 = (state_34140[(7)]);
var inst_34114 = (state_34140[(2)]);
var inst_34115 = (inst_34098 + (1));
var inst_34098__$1 = inst_34115;
var state_34140__$1 = (function (){var statearr_34166 = state_34140;
(statearr_34166[(7)] = inst_34098__$1);

(statearr_34166[(14)] = inst_34114);

return statearr_34166;
})();
var statearr_34167_35700 = state_34140__$1;
(statearr_34167_35700[(2)] = null);

(statearr_34167_35700[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (8))){
var inst_34119 = (state_34140[(2)]);
var state_34140__$1 = state_34140;
var statearr_34168_35701 = state_34140__$1;
(statearr_34168_35701[(2)] = inst_34119);

(statearr_34168_35701[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32104__auto__ = null;
var cljs$core$async$state_machine__32104__auto____0 = (function (){
var statearr_34177 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34177[(0)] = cljs$core$async$state_machine__32104__auto__);

(statearr_34177[(1)] = (1));

return statearr_34177;
});
var cljs$core$async$state_machine__32104__auto____1 = (function (state_34140){
while(true){
var ret_value__32105__auto__ = (function (){try{while(true){
var result__32106__auto__ = switch__32103__auto__(state_34140);
if(cljs.core.keyword_identical_QMARK_(result__32106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32106__auto__;
}
break;
}
}catch (e34181){var ex__32107__auto__ = e34181;
var statearr_34182_35703 = state_34140;
(statearr_34182_35703[(2)] = ex__32107__auto__);


if(cljs.core.seq((state_34140[(4)]))){
var statearr_34183_35707 = state_34140;
(statearr_34183_35707[(1)] = cljs.core.first((state_34140[(4)])));

} else {
throw ex__32107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35708 = state_34140;
state_34140 = G__35708;
continue;
} else {
return ret_value__32105__auto__;
}
break;
}
});
cljs$core$async$state_machine__32104__auto__ = function(state_34140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32104__auto____1.call(this,state_34140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32104__auto____0;
cljs$core$async$state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32104__auto____1;
return cljs$core$async$state_machine__32104__auto__;
})()
})();
var state__32624__auto__ = (function (){var statearr_34184 = f__32623__auto__();
(statearr_34184[(6)] = c__32622__auto___35668);

return statearr_34184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32624__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34187 = arguments.length;
switch (G__34187) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32622__auto___35715 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32623__auto__ = (function (){var switch__32103__auto__ = (function (state_34219){
var state_val_34220 = (state_34219[(1)]);
if((state_val_34220 === (7))){
var inst_34199 = (state_34219[(7)]);
var inst_34198 = (state_34219[(8)]);
var inst_34198__$1 = (state_34219[(2)]);
var inst_34199__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34198__$1,(0),null);
var inst_34200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34198__$1,(1),null);
var inst_34201 = (inst_34199__$1 == null);
var state_34219__$1 = (function (){var statearr_34221 = state_34219;
(statearr_34221[(7)] = inst_34199__$1);

(statearr_34221[(8)] = inst_34198__$1);

(statearr_34221[(9)] = inst_34200);

return statearr_34221;
})();
if(cljs.core.truth_(inst_34201)){
var statearr_34222_35718 = state_34219__$1;
(statearr_34222_35718[(1)] = (8));

} else {
var statearr_34223_35719 = state_34219__$1;
(statearr_34223_35719[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (1))){
var inst_34188 = cljs.core.vec(chs);
var inst_34189 = inst_34188;
var state_34219__$1 = (function (){var statearr_34224 = state_34219;
(statearr_34224[(10)] = inst_34189);

return statearr_34224;
})();
var statearr_34225_35720 = state_34219__$1;
(statearr_34225_35720[(2)] = null);

(statearr_34225_35720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (4))){
var inst_34189 = (state_34219[(10)]);
var state_34219__$1 = state_34219;
return cljs.core.async.ioc_alts_BANG_(state_34219__$1,(7),inst_34189);
} else {
if((state_val_34220 === (6))){
var inst_34215 = (state_34219[(2)]);
var state_34219__$1 = state_34219;
var statearr_34226_35721 = state_34219__$1;
(statearr_34226_35721[(2)] = inst_34215);

(statearr_34226_35721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (3))){
var inst_34217 = (state_34219[(2)]);
var state_34219__$1 = state_34219;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34219__$1,inst_34217);
} else {
if((state_val_34220 === (2))){
var inst_34189 = (state_34219[(10)]);
var inst_34191 = cljs.core.count(inst_34189);
var inst_34192 = (inst_34191 > (0));
var state_34219__$1 = state_34219;
if(cljs.core.truth_(inst_34192)){
var statearr_34230_35723 = state_34219__$1;
(statearr_34230_35723[(1)] = (4));

} else {
var statearr_34231_35724 = state_34219__$1;
(statearr_34231_35724[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (11))){
var inst_34189 = (state_34219[(10)]);
var inst_34208 = (state_34219[(2)]);
var tmp34227 = inst_34189;
var inst_34189__$1 = tmp34227;
var state_34219__$1 = (function (){var statearr_34232 = state_34219;
(statearr_34232[(11)] = inst_34208);

(statearr_34232[(10)] = inst_34189__$1);

return statearr_34232;
})();
var statearr_34234_35725 = state_34219__$1;
(statearr_34234_35725[(2)] = null);

(statearr_34234_35725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (9))){
var inst_34199 = (state_34219[(7)]);
var state_34219__$1 = state_34219;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34219__$1,(11),out,inst_34199);
} else {
if((state_val_34220 === (5))){
var inst_34213 = cljs.core.async.close_BANG_(out);
var state_34219__$1 = state_34219;
var statearr_34238_35727 = state_34219__$1;
(statearr_34238_35727[(2)] = inst_34213);

(statearr_34238_35727[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (10))){
var inst_34211 = (state_34219[(2)]);
var state_34219__$1 = state_34219;
var statearr_34239_35731 = state_34219__$1;
(statearr_34239_35731[(2)] = inst_34211);

(statearr_34239_35731[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (8))){
var inst_34199 = (state_34219[(7)]);
var inst_34198 = (state_34219[(8)]);
var inst_34200 = (state_34219[(9)]);
var inst_34189 = (state_34219[(10)]);
var inst_34203 = (function (){var cs = inst_34189;
var vec__34194 = inst_34198;
var v = inst_34199;
var c = inst_34200;
return (function (p1__34185_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34185_SHARP_);
});
})();
var inst_34204 = cljs.core.filterv(inst_34203,inst_34189);
var inst_34189__$1 = inst_34204;
var state_34219__$1 = (function (){var statearr_34242 = state_34219;
(statearr_34242[(10)] = inst_34189__$1);

return statearr_34242;
})();
var statearr_34243_35732 = state_34219__$1;
(statearr_34243_35732[(2)] = null);

(statearr_34243_35732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32104__auto__ = null;
var cljs$core$async$state_machine__32104__auto____0 = (function (){
var statearr_34244 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34244[(0)] = cljs$core$async$state_machine__32104__auto__);

(statearr_34244[(1)] = (1));

return statearr_34244;
});
var cljs$core$async$state_machine__32104__auto____1 = (function (state_34219){
while(true){
var ret_value__32105__auto__ = (function (){try{while(true){
var result__32106__auto__ = switch__32103__auto__(state_34219);
if(cljs.core.keyword_identical_QMARK_(result__32106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32106__auto__;
}
break;
}
}catch (e34245){var ex__32107__auto__ = e34245;
var statearr_34246_35733 = state_34219;
(statearr_34246_35733[(2)] = ex__32107__auto__);


if(cljs.core.seq((state_34219[(4)]))){
var statearr_34247_35734 = state_34219;
(statearr_34247_35734[(1)] = cljs.core.first((state_34219[(4)])));

} else {
throw ex__32107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35735 = state_34219;
state_34219 = G__35735;
continue;
} else {
return ret_value__32105__auto__;
}
break;
}
});
cljs$core$async$state_machine__32104__auto__ = function(state_34219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32104__auto____1.call(this,state_34219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32104__auto____0;
cljs$core$async$state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32104__auto____1;
return cljs$core$async$state_machine__32104__auto__;
})()
})();
var state__32624__auto__ = (function (){var statearr_34248 = f__32623__auto__();
(statearr_34248[(6)] = c__32622__auto___35715);

return statearr_34248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32624__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34250 = arguments.length;
switch (G__34250) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32622__auto___35738 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32623__auto__ = (function (){var switch__32103__auto__ = (function (state_34277){
var state_val_34278 = (state_34277[(1)]);
if((state_val_34278 === (7))){
var inst_34256 = (state_34277[(7)]);
var inst_34256__$1 = (state_34277[(2)]);
var inst_34260 = (inst_34256__$1 == null);
var inst_34261 = cljs.core.not(inst_34260);
var state_34277__$1 = (function (){var statearr_34279 = state_34277;
(statearr_34279[(7)] = inst_34256__$1);

return statearr_34279;
})();
if(inst_34261){
var statearr_34280_35739 = state_34277__$1;
(statearr_34280_35739[(1)] = (8));

} else {
var statearr_34281_35740 = state_34277__$1;
(statearr_34281_35740[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34278 === (1))){
var inst_34251 = (0);
var state_34277__$1 = (function (){var statearr_34282 = state_34277;
(statearr_34282[(8)] = inst_34251);

return statearr_34282;
})();
var statearr_34283_35741 = state_34277__$1;
(statearr_34283_35741[(2)] = null);

(statearr_34283_35741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34278 === (4))){
var state_34277__$1 = state_34277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34277__$1,(7),ch);
} else {
if((state_val_34278 === (6))){
var inst_34272 = (state_34277[(2)]);
var state_34277__$1 = state_34277;
var statearr_34284_35743 = state_34277__$1;
(statearr_34284_35743[(2)] = inst_34272);

(statearr_34284_35743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34278 === (3))){
var inst_34274 = (state_34277[(2)]);
var inst_34275 = cljs.core.async.close_BANG_(out);
var state_34277__$1 = (function (){var statearr_34288 = state_34277;
(statearr_34288[(9)] = inst_34274);

return statearr_34288;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34277__$1,inst_34275);
} else {
if((state_val_34278 === (2))){
var inst_34251 = (state_34277[(8)]);
var inst_34253 = (inst_34251 < n);
var state_34277__$1 = state_34277;
if(cljs.core.truth_(inst_34253)){
var statearr_34296_35744 = state_34277__$1;
(statearr_34296_35744[(1)] = (4));

} else {
var statearr_34297_35745 = state_34277__$1;
(statearr_34297_35745[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34278 === (11))){
var inst_34251 = (state_34277[(8)]);
var inst_34264 = (state_34277[(2)]);
var inst_34265 = (inst_34251 + (1));
var inst_34251__$1 = inst_34265;
var state_34277__$1 = (function (){var statearr_34301 = state_34277;
(statearr_34301[(10)] = inst_34264);

(statearr_34301[(8)] = inst_34251__$1);

return statearr_34301;
})();
var statearr_34302_35746 = state_34277__$1;
(statearr_34302_35746[(2)] = null);

(statearr_34302_35746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34278 === (9))){
var state_34277__$1 = state_34277;
var statearr_34303_35748 = state_34277__$1;
(statearr_34303_35748[(2)] = null);

(statearr_34303_35748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34278 === (5))){
var state_34277__$1 = state_34277;
var statearr_34304_35750 = state_34277__$1;
(statearr_34304_35750[(2)] = null);

(statearr_34304_35750[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34278 === (10))){
var inst_34269 = (state_34277[(2)]);
var state_34277__$1 = state_34277;
var statearr_34305_35751 = state_34277__$1;
(statearr_34305_35751[(2)] = inst_34269);

(statearr_34305_35751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34278 === (8))){
var inst_34256 = (state_34277[(7)]);
var state_34277__$1 = state_34277;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34277__$1,(11),out,inst_34256);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32104__auto__ = null;
var cljs$core$async$state_machine__32104__auto____0 = (function (){
var statearr_34316 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34316[(0)] = cljs$core$async$state_machine__32104__auto__);

(statearr_34316[(1)] = (1));

return statearr_34316;
});
var cljs$core$async$state_machine__32104__auto____1 = (function (state_34277){
while(true){
var ret_value__32105__auto__ = (function (){try{while(true){
var result__32106__auto__ = switch__32103__auto__(state_34277);
if(cljs.core.keyword_identical_QMARK_(result__32106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32106__auto__;
}
break;
}
}catch (e34317){var ex__32107__auto__ = e34317;
var statearr_34318_35755 = state_34277;
(statearr_34318_35755[(2)] = ex__32107__auto__);


if(cljs.core.seq((state_34277[(4)]))){
var statearr_34319_35756 = state_34277;
(statearr_34319_35756[(1)] = cljs.core.first((state_34277[(4)])));

} else {
throw ex__32107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35758 = state_34277;
state_34277 = G__35758;
continue;
} else {
return ret_value__32105__auto__;
}
break;
}
});
cljs$core$async$state_machine__32104__auto__ = function(state_34277){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32104__auto____1.call(this,state_34277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32104__auto____0;
cljs$core$async$state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32104__auto____1;
return cljs$core$async$state_machine__32104__auto__;
})()
})();
var state__32624__auto__ = (function (){var statearr_34323 = f__32623__auto__();
(statearr_34323[(6)] = c__32622__auto___35738);

return statearr_34323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32624__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34335 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34335 = (function (f,ch,meta34336){
this.f = f;
this.ch = ch;
this.meta34336 = meta34336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34337,meta34336__$1){
var self__ = this;
var _34337__$1 = this;
return (new cljs.core.async.t_cljs$core$async34335(self__.f,self__.ch,meta34336__$1));
}));

(cljs.core.async.t_cljs$core$async34335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34337){
var self__ = this;
var _34337__$1 = this;
return self__.meta34336;
}));

(cljs.core.async.t_cljs$core$async34335.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34335.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34335.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34335.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34335.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34344 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34344 = (function (f,ch,meta34336,_,fn1,meta34345){
this.f = f;
this.ch = ch;
this.meta34336 = meta34336;
this._ = _;
this.fn1 = fn1;
this.meta34345 = meta34345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34346,meta34345__$1){
var self__ = this;
var _34346__$1 = this;
return (new cljs.core.async.t_cljs$core$async34344(self__.f,self__.ch,self__.meta34336,self__._,self__.fn1,meta34345__$1));
}));

(cljs.core.async.t_cljs$core$async34344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34346){
var self__ = this;
var _34346__$1 = this;
return self__.meta34345;
}));

(cljs.core.async.t_cljs$core$async34344.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34344.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34344.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34344.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34331_SHARP_){
var G__34347 = (((p1__34331_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34331_SHARP_) : self__.f.call(null,p1__34331_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34347) : f1.call(null,G__34347));
});
}));

(cljs.core.async.t_cljs$core$async34344.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34336","meta34336",1337269977,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34335","cljs.core.async/t_cljs$core$async34335",-1590601592,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34345","meta34345",1950465517,null)], null);
}));

(cljs.core.async.t_cljs$core$async34344.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34344");

(cljs.core.async.t_cljs$core$async34344.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34344");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34344.
 */
cljs.core.async.__GT_t_cljs$core$async34344 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34344(f__$1,ch__$1,meta34336__$1,___$2,fn1__$1,meta34345){
return (new cljs.core.async.t_cljs$core$async34344(f__$1,ch__$1,meta34336__$1,___$2,fn1__$1,meta34345));
});

}

return (new cljs.core.async.t_cljs$core$async34344(self__.f,self__.ch,self__.meta34336,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34348 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34348) : self__.f.call(null,G__34348));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34335.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34335.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34335.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34336","meta34336",1337269977,null)], null);
}));

(cljs.core.async.t_cljs$core$async34335.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34335.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34335");

(cljs.core.async.t_cljs$core$async34335.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34335");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34335.
 */
cljs.core.async.__GT_t_cljs$core$async34335 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34335(f__$1,ch__$1,meta34336){
return (new cljs.core.async.t_cljs$core$async34335(f__$1,ch__$1,meta34336));
});

}

return (new cljs.core.async.t_cljs$core$async34335(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34349 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34349 = (function (f,ch,meta34350){
this.f = f;
this.ch = ch;
this.meta34350 = meta34350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34351,meta34350__$1){
var self__ = this;
var _34351__$1 = this;
return (new cljs.core.async.t_cljs$core$async34349(self__.f,self__.ch,meta34350__$1));
}));

(cljs.core.async.t_cljs$core$async34349.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34351){
var self__ = this;
var _34351__$1 = this;
return self__.meta34350;
}));

(cljs.core.async.t_cljs$core$async34349.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34349.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34349.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34349.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34349.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34349.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34349.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34350","meta34350",2006494115,null)], null);
}));

(cljs.core.async.t_cljs$core$async34349.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34349.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34349");

(cljs.core.async.t_cljs$core$async34349.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34349");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34349.
 */
cljs.core.async.__GT_t_cljs$core$async34349 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34349(f__$1,ch__$1,meta34350){
return (new cljs.core.async.t_cljs$core$async34349(f__$1,ch__$1,meta34350));
});

}

return (new cljs.core.async.t_cljs$core$async34349(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34365 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34365 = (function (p,ch,meta34366){
this.p = p;
this.ch = ch;
this.meta34366 = meta34366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34367,meta34366__$1){
var self__ = this;
var _34367__$1 = this;
return (new cljs.core.async.t_cljs$core$async34365(self__.p,self__.ch,meta34366__$1));
}));

(cljs.core.async.t_cljs$core$async34365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34367){
var self__ = this;
var _34367__$1 = this;
return self__.meta34366;
}));

(cljs.core.async.t_cljs$core$async34365.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34365.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34365.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34365.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34365.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34365.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34365.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34365.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34366","meta34366",1424200564,null)], null);
}));

(cljs.core.async.t_cljs$core$async34365.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34365.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34365");

(cljs.core.async.t_cljs$core$async34365.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34365");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34365.
 */
cljs.core.async.__GT_t_cljs$core$async34365 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34365(p__$1,ch__$1,meta34366){
return (new cljs.core.async.t_cljs$core$async34365(p__$1,ch__$1,meta34366));
});

}

return (new cljs.core.async.t_cljs$core$async34365(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34371 = arguments.length;
switch (G__34371) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32622__auto___35794 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32623__auto__ = (function (){var switch__32103__auto__ = (function (state_34394){
var state_val_34395 = (state_34394[(1)]);
if((state_val_34395 === (7))){
var inst_34389 = (state_34394[(2)]);
var state_34394__$1 = state_34394;
var statearr_34397_35795 = state_34394__$1;
(statearr_34397_35795[(2)] = inst_34389);

(statearr_34397_35795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34395 === (1))){
var state_34394__$1 = state_34394;
var statearr_34398_35796 = state_34394__$1;
(statearr_34398_35796[(2)] = null);

(statearr_34398_35796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34395 === (4))){
var inst_34374 = (state_34394[(7)]);
var inst_34374__$1 = (state_34394[(2)]);
var inst_34375 = (inst_34374__$1 == null);
var state_34394__$1 = (function (){var statearr_34399 = state_34394;
(statearr_34399[(7)] = inst_34374__$1);

return statearr_34399;
})();
if(cljs.core.truth_(inst_34375)){
var statearr_34400_35797 = state_34394__$1;
(statearr_34400_35797[(1)] = (5));

} else {
var statearr_34401_35798 = state_34394__$1;
(statearr_34401_35798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34395 === (6))){
var inst_34374 = (state_34394[(7)]);
var inst_34379 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34374) : p.call(null,inst_34374));
var state_34394__$1 = state_34394;
if(cljs.core.truth_(inst_34379)){
var statearr_34402_35800 = state_34394__$1;
(statearr_34402_35800[(1)] = (8));

} else {
var statearr_34403_35801 = state_34394__$1;
(statearr_34403_35801[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34395 === (3))){
var inst_34391 = (state_34394[(2)]);
var state_34394__$1 = state_34394;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34394__$1,inst_34391);
} else {
if((state_val_34395 === (2))){
var state_34394__$1 = state_34394;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34394__$1,(4),ch);
} else {
if((state_val_34395 === (11))){
var inst_34382 = (state_34394[(2)]);
var state_34394__$1 = state_34394;
var statearr_34404_35802 = state_34394__$1;
(statearr_34404_35802[(2)] = inst_34382);

(statearr_34404_35802[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34395 === (9))){
var state_34394__$1 = state_34394;
var statearr_34414_35803 = state_34394__$1;
(statearr_34414_35803[(2)] = null);

(statearr_34414_35803[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34395 === (5))){
var inst_34377 = cljs.core.async.close_BANG_(out);
var state_34394__$1 = state_34394;
var statearr_34415_35809 = state_34394__$1;
(statearr_34415_35809[(2)] = inst_34377);

(statearr_34415_35809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34395 === (10))){
var inst_34385 = (state_34394[(2)]);
var state_34394__$1 = (function (){var statearr_34416 = state_34394;
(statearr_34416[(8)] = inst_34385);

return statearr_34416;
})();
var statearr_34417_35811 = state_34394__$1;
(statearr_34417_35811[(2)] = null);

(statearr_34417_35811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34395 === (8))){
var inst_34374 = (state_34394[(7)]);
var state_34394__$1 = state_34394;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34394__$1,(11),out,inst_34374);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32104__auto__ = null;
var cljs$core$async$state_machine__32104__auto____0 = (function (){
var statearr_34419 = [null,null,null,null,null,null,null,null,null];
(statearr_34419[(0)] = cljs$core$async$state_machine__32104__auto__);

(statearr_34419[(1)] = (1));

return statearr_34419;
});
var cljs$core$async$state_machine__32104__auto____1 = (function (state_34394){
while(true){
var ret_value__32105__auto__ = (function (){try{while(true){
var result__32106__auto__ = switch__32103__auto__(state_34394);
if(cljs.core.keyword_identical_QMARK_(result__32106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32106__auto__;
}
break;
}
}catch (e34420){var ex__32107__auto__ = e34420;
var statearr_34421_35814 = state_34394;
(statearr_34421_35814[(2)] = ex__32107__auto__);


if(cljs.core.seq((state_34394[(4)]))){
var statearr_34422_35815 = state_34394;
(statearr_34422_35815[(1)] = cljs.core.first((state_34394[(4)])));

} else {
throw ex__32107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35816 = state_34394;
state_34394 = G__35816;
continue;
} else {
return ret_value__32105__auto__;
}
break;
}
});
cljs$core$async$state_machine__32104__auto__ = function(state_34394){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32104__auto____1.call(this,state_34394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32104__auto____0;
cljs$core$async$state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32104__auto____1;
return cljs$core$async$state_machine__32104__auto__;
})()
})();
var state__32624__auto__ = (function (){var statearr_34423 = f__32623__auto__();
(statearr_34423[(6)] = c__32622__auto___35794);

return statearr_34423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32624__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34425 = arguments.length;
switch (G__34425) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32622__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32623__auto__ = (function (){var switch__32103__auto__ = (function (state_34491){
var state_val_34492 = (state_34491[(1)]);
if((state_val_34492 === (7))){
var inst_34486 = (state_34491[(2)]);
var state_34491__$1 = state_34491;
var statearr_34493_35824 = state_34491__$1;
(statearr_34493_35824[(2)] = inst_34486);

(statearr_34493_35824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34492 === (20))){
var inst_34455 = (state_34491[(7)]);
var inst_34467 = (state_34491[(2)]);
var inst_34468 = cljs.core.next(inst_34455);
var inst_34441 = inst_34468;
var inst_34442 = null;
var inst_34443 = (0);
var inst_34444 = (0);
var state_34491__$1 = (function (){var statearr_34494 = state_34491;
(statearr_34494[(8)] = inst_34443);

(statearr_34494[(9)] = inst_34467);

(statearr_34494[(10)] = inst_34441);

(statearr_34494[(11)] = inst_34444);

(statearr_34494[(12)] = inst_34442);

return statearr_34494;
})();
var statearr_34495_35825 = state_34491__$1;
(statearr_34495_35825[(2)] = null);

(statearr_34495_35825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34492 === (1))){
var state_34491__$1 = state_34491;
var statearr_34496_35826 = state_34491__$1;
(statearr_34496_35826[(2)] = null);

(statearr_34496_35826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34492 === (4))){
var inst_34428 = (state_34491[(13)]);
var inst_34428__$1 = (state_34491[(2)]);
var inst_34431 = (inst_34428__$1 == null);
var state_34491__$1 = (function (){var statearr_34498 = state_34491;
(statearr_34498[(13)] = inst_34428__$1);

return statearr_34498;
})();
if(cljs.core.truth_(inst_34431)){
var statearr_34505_35827 = state_34491__$1;
(statearr_34505_35827[(1)] = (5));

} else {
var statearr_34506_35828 = state_34491__$1;
(statearr_34506_35828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34492 === (15))){
var state_34491__$1 = state_34491;
var statearr_34510_35829 = state_34491__$1;
(statearr_34510_35829[(2)] = null);

(statearr_34510_35829[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34492 === (21))){
var state_34491__$1 = state_34491;
var statearr_34512_35830 = state_34491__$1;
(statearr_34512_35830[(2)] = null);

(statearr_34512_35830[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34492 === (13))){
var inst_34443 = (state_34491[(8)]);
var inst_34441 = (state_34491[(10)]);
var inst_34444 = (state_34491[(11)]);
var inst_34442 = (state_34491[(12)]);
var inst_34451 = (state_34491[(2)]);
var inst_34452 = (inst_34444 + (1));
var tmp34507 = inst_34443;
var tmp34508 = inst_34441;
var tmp34509 = inst_34442;
var inst_34441__$1 = tmp34508;
var inst_34442__$1 = tmp34509;
var inst_34443__$1 = tmp34507;
var inst_34444__$1 = inst_34452;
var state_34491__$1 = (function (){var statearr_34513 = state_34491;
(statearr_34513[(8)] = inst_34443__$1);

(statearr_34513[(14)] = inst_34451);

(statearr_34513[(10)] = inst_34441__$1);

(statearr_34513[(11)] = inst_34444__$1);

(statearr_34513[(12)] = inst_34442__$1);

return statearr_34513;
})();
var statearr_34523_35831 = state_34491__$1;
(statearr_34523_35831[(2)] = null);

(statearr_34523_35831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34492 === (22))){
var state_34491__$1 = state_34491;
var statearr_34524_35832 = state_34491__$1;
(statearr_34524_35832[(2)] = null);

(statearr_34524_35832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34492 === (6))){
var inst_34428 = (state_34491[(13)]);
var inst_34439 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34428) : f.call(null,inst_34428));
var inst_34440 = cljs.core.seq(inst_34439);
var inst_34441 = inst_34440;
var inst_34442 = null;
var inst_34443 = (0);
var inst_34444 = (0);
var state_34491__$1 = (function (){var statearr_34526 = state_34491;
(statearr_34526[(8)] = inst_34443);

(statearr_34526[(10)] = inst_34441);

(statearr_34526[(11)] = inst_34444);

(statearr_34526[(12)] = inst_34442);

return statearr_34526;
})();
var statearr_34530_35836 = state_34491__$1;
(statearr_34530_35836[(2)] = null);

(statearr_34530_35836[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34492 === (17))){
var inst_34455 = (state_34491[(7)]);
var inst_34459 = cljs.core.chunk_first(inst_34455);
var inst_34461 = cljs.core.chunk_rest(inst_34455);
var inst_34462 = cljs.core.count(inst_34459);
var inst_34441 = inst_34461;
var inst_34442 = inst_34459;
var inst_34443 = inst_34462;
var inst_34444 = (0);
var state_34491__$1 = (function (){var statearr_34535 = state_34491;
(statearr_34535[(8)] = inst_34443);

(statearr_34535[(10)] = inst_34441);

(statearr_34535[(11)] = inst_34444);

(statearr_34535[(12)] = inst_34442);

return statearr_34535;
})();
var statearr_34539_35837 = state_34491__$1;
(statearr_34539_35837[(2)] = null);

(statearr_34539_35837[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34492 === (3))){
var inst_34488 = (state_34491[(2)]);
var state_34491__$1 = state_34491;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34491__$1,inst_34488);
} else {
if((state_val_34492 === (12))){
var inst_34476 = (state_34491[(2)]);
var state_34491__$1 = state_34491;
var statearr_34541_35839 = state_34491__$1;
(statearr_34541_35839[(2)] = inst_34476);

(statearr_34541_35839[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34492 === (2))){
var state_34491__$1 = state_34491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34491__$1,(4),in$);
} else {
if((state_val_34492 === (23))){
var inst_34484 = (state_34491[(2)]);
var state_34491__$1 = state_34491;
var statearr_34542_35842 = state_34491__$1;
(statearr_34542_35842[(2)] = inst_34484);

(statearr_34542_35842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34492 === (19))){
var inst_34471 = (state_34491[(2)]);
var state_34491__$1 = state_34491;
var statearr_34543_35847 = state_34491__$1;
(statearr_34543_35847[(2)] = inst_34471);

(statearr_34543_35847[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34492 === (11))){
var inst_34455 = (state_34491[(7)]);
var inst_34441 = (state_34491[(10)]);
var inst_34455__$1 = cljs.core.seq(inst_34441);
var state_34491__$1 = (function (){var statearr_34546 = state_34491;
(statearr_34546[(7)] = inst_34455__$1);

return statearr_34546;
})();
if(inst_34455__$1){
var statearr_34547_35848 = state_34491__$1;
(statearr_34547_35848[(1)] = (14));

} else {
var statearr_34548_35849 = state_34491__$1;
(statearr_34548_35849[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34492 === (9))){
var inst_34478 = (state_34491[(2)]);
var inst_34479 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34491__$1 = (function (){var statearr_34552 = state_34491;
(statearr_34552[(15)] = inst_34478);

return statearr_34552;
})();
if(cljs.core.truth_(inst_34479)){
var statearr_34555_35850 = state_34491__$1;
(statearr_34555_35850[(1)] = (21));

} else {
var statearr_34556_35851 = state_34491__$1;
(statearr_34556_35851[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34492 === (5))){
var inst_34433 = cljs.core.async.close_BANG_(out);
var state_34491__$1 = state_34491;
var statearr_34557_35852 = state_34491__$1;
(statearr_34557_35852[(2)] = inst_34433);

(statearr_34557_35852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34492 === (14))){
var inst_34455 = (state_34491[(7)]);
var inst_34457 = cljs.core.chunked_seq_QMARK_(inst_34455);
var state_34491__$1 = state_34491;
if(inst_34457){
var statearr_34558_35853 = state_34491__$1;
(statearr_34558_35853[(1)] = (17));

} else {
var statearr_34559_35854 = state_34491__$1;
(statearr_34559_35854[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34492 === (16))){
var inst_34474 = (state_34491[(2)]);
var state_34491__$1 = state_34491;
var statearr_34561_35855 = state_34491__$1;
(statearr_34561_35855[(2)] = inst_34474);

(statearr_34561_35855[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34492 === (10))){
var inst_34444 = (state_34491[(11)]);
var inst_34442 = (state_34491[(12)]);
var inst_34449 = cljs.core._nth(inst_34442,inst_34444);
var state_34491__$1 = state_34491;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34491__$1,(13),out,inst_34449);
} else {
if((state_val_34492 === (18))){
var inst_34455 = (state_34491[(7)]);
var inst_34465 = cljs.core.first(inst_34455);
var state_34491__$1 = state_34491;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34491__$1,(20),out,inst_34465);
} else {
if((state_val_34492 === (8))){
var inst_34443 = (state_34491[(8)]);
var inst_34444 = (state_34491[(11)]);
var inst_34446 = (inst_34444 < inst_34443);
var inst_34447 = inst_34446;
var state_34491__$1 = state_34491;
if(cljs.core.truth_(inst_34447)){
var statearr_34566_35856 = state_34491__$1;
(statearr_34566_35856[(1)] = (10));

} else {
var statearr_34567_35857 = state_34491__$1;
(statearr_34567_35857[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32104__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32104__auto____0 = (function (){
var statearr_34568 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34568[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32104__auto__);

(statearr_34568[(1)] = (1));

return statearr_34568;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32104__auto____1 = (function (state_34491){
while(true){
var ret_value__32105__auto__ = (function (){try{while(true){
var result__32106__auto__ = switch__32103__auto__(state_34491);
if(cljs.core.keyword_identical_QMARK_(result__32106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32106__auto__;
}
break;
}
}catch (e34569){var ex__32107__auto__ = e34569;
var statearr_34570_35858 = state_34491;
(statearr_34570_35858[(2)] = ex__32107__auto__);


if(cljs.core.seq((state_34491[(4)]))){
var statearr_34571_35859 = state_34491;
(statearr_34571_35859[(1)] = cljs.core.first((state_34491[(4)])));

} else {
throw ex__32107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35860 = state_34491;
state_34491 = G__35860;
continue;
} else {
return ret_value__32105__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32104__auto__ = function(state_34491){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32104__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32104__auto____1.call(this,state_34491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32104__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32104__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32104__auto__;
})()
})();
var state__32624__auto__ = (function (){var statearr_34573 = f__32623__auto__();
(statearr_34573[(6)] = c__32622__auto__);

return statearr_34573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32624__auto__);
}));

return c__32622__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34582 = arguments.length;
switch (G__34582) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34585 = arguments.length;
switch (G__34585) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34591 = arguments.length;
switch (G__34591) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32622__auto___35868 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32623__auto__ = (function (){var switch__32103__auto__ = (function (state_34617){
var state_val_34618 = (state_34617[(1)]);
if((state_val_34618 === (7))){
var inst_34612 = (state_34617[(2)]);
var state_34617__$1 = state_34617;
var statearr_34619_35870 = state_34617__$1;
(statearr_34619_35870[(2)] = inst_34612);

(statearr_34619_35870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34618 === (1))){
var inst_34594 = null;
var state_34617__$1 = (function (){var statearr_34620 = state_34617;
(statearr_34620[(7)] = inst_34594);

return statearr_34620;
})();
var statearr_34621_35872 = state_34617__$1;
(statearr_34621_35872[(2)] = null);

(statearr_34621_35872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34618 === (4))){
var inst_34597 = (state_34617[(8)]);
var inst_34597__$1 = (state_34617[(2)]);
var inst_34598 = (inst_34597__$1 == null);
var inst_34599 = cljs.core.not(inst_34598);
var state_34617__$1 = (function (){var statearr_34622 = state_34617;
(statearr_34622[(8)] = inst_34597__$1);

return statearr_34622;
})();
if(inst_34599){
var statearr_34623_35873 = state_34617__$1;
(statearr_34623_35873[(1)] = (5));

} else {
var statearr_34624_35876 = state_34617__$1;
(statearr_34624_35876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34618 === (6))){
var state_34617__$1 = state_34617;
var statearr_34625_35880 = state_34617__$1;
(statearr_34625_35880[(2)] = null);

(statearr_34625_35880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34618 === (3))){
var inst_34614 = (state_34617[(2)]);
var inst_34615 = cljs.core.async.close_BANG_(out);
var state_34617__$1 = (function (){var statearr_34630 = state_34617;
(statearr_34630[(9)] = inst_34614);

return statearr_34630;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34617__$1,inst_34615);
} else {
if((state_val_34618 === (2))){
var state_34617__$1 = state_34617;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34617__$1,(4),ch);
} else {
if((state_val_34618 === (11))){
var inst_34597 = (state_34617[(8)]);
var inst_34606 = (state_34617[(2)]);
var inst_34594 = inst_34597;
var state_34617__$1 = (function (){var statearr_34631 = state_34617;
(statearr_34631[(7)] = inst_34594);

(statearr_34631[(10)] = inst_34606);

return statearr_34631;
})();
var statearr_34632_35881 = state_34617__$1;
(statearr_34632_35881[(2)] = null);

(statearr_34632_35881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34618 === (9))){
var inst_34597 = (state_34617[(8)]);
var state_34617__$1 = state_34617;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34617__$1,(11),out,inst_34597);
} else {
if((state_val_34618 === (5))){
var inst_34594 = (state_34617[(7)]);
var inst_34597 = (state_34617[(8)]);
var inst_34601 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34597,inst_34594);
var state_34617__$1 = state_34617;
if(inst_34601){
var statearr_34635_35883 = state_34617__$1;
(statearr_34635_35883[(1)] = (8));

} else {
var statearr_34636_35884 = state_34617__$1;
(statearr_34636_35884[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34618 === (10))){
var inst_34609 = (state_34617[(2)]);
var state_34617__$1 = state_34617;
var statearr_34637_35885 = state_34617__$1;
(statearr_34637_35885[(2)] = inst_34609);

(statearr_34637_35885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34618 === (8))){
var inst_34594 = (state_34617[(7)]);
var tmp34634 = inst_34594;
var inst_34594__$1 = tmp34634;
var state_34617__$1 = (function (){var statearr_34644 = state_34617;
(statearr_34644[(7)] = inst_34594__$1);

return statearr_34644;
})();
var statearr_34645_35886 = state_34617__$1;
(statearr_34645_35886[(2)] = null);

(statearr_34645_35886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32104__auto__ = null;
var cljs$core$async$state_machine__32104__auto____0 = (function (){
var statearr_34649 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34649[(0)] = cljs$core$async$state_machine__32104__auto__);

(statearr_34649[(1)] = (1));

return statearr_34649;
});
var cljs$core$async$state_machine__32104__auto____1 = (function (state_34617){
while(true){
var ret_value__32105__auto__ = (function (){try{while(true){
var result__32106__auto__ = switch__32103__auto__(state_34617);
if(cljs.core.keyword_identical_QMARK_(result__32106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32106__auto__;
}
break;
}
}catch (e34650){var ex__32107__auto__ = e34650;
var statearr_34651_35887 = state_34617;
(statearr_34651_35887[(2)] = ex__32107__auto__);


if(cljs.core.seq((state_34617[(4)]))){
var statearr_34653_35889 = state_34617;
(statearr_34653_35889[(1)] = cljs.core.first((state_34617[(4)])));

} else {
throw ex__32107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35893 = state_34617;
state_34617 = G__35893;
continue;
} else {
return ret_value__32105__auto__;
}
break;
}
});
cljs$core$async$state_machine__32104__auto__ = function(state_34617){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32104__auto____1.call(this,state_34617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32104__auto____0;
cljs$core$async$state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32104__auto____1;
return cljs$core$async$state_machine__32104__auto__;
})()
})();
var state__32624__auto__ = (function (){var statearr_34657 = f__32623__auto__();
(statearr_34657[(6)] = c__32622__auto___35868);

return statearr_34657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32624__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34665 = arguments.length;
switch (G__34665) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32622__auto___35897 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32623__auto__ = (function (){var switch__32103__auto__ = (function (state_34710){
var state_val_34711 = (state_34710[(1)]);
if((state_val_34711 === (7))){
var inst_34706 = (state_34710[(2)]);
var state_34710__$1 = state_34710;
var statearr_34713_35902 = state_34710__$1;
(statearr_34713_35902[(2)] = inst_34706);

(statearr_34713_35902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34711 === (1))){
var inst_34672 = (new Array(n));
var inst_34673 = inst_34672;
var inst_34674 = (0);
var state_34710__$1 = (function (){var statearr_34714 = state_34710;
(statearr_34714[(7)] = inst_34674);

(statearr_34714[(8)] = inst_34673);

return statearr_34714;
})();
var statearr_34715_35903 = state_34710__$1;
(statearr_34715_35903[(2)] = null);

(statearr_34715_35903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34711 === (4))){
var inst_34677 = (state_34710[(9)]);
var inst_34677__$1 = (state_34710[(2)]);
var inst_34678 = (inst_34677__$1 == null);
var inst_34679 = cljs.core.not(inst_34678);
var state_34710__$1 = (function (){var statearr_34716 = state_34710;
(statearr_34716[(9)] = inst_34677__$1);

return statearr_34716;
})();
if(inst_34679){
var statearr_34717_35906 = state_34710__$1;
(statearr_34717_35906[(1)] = (5));

} else {
var statearr_34718_35908 = state_34710__$1;
(statearr_34718_35908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34711 === (15))){
var inst_34699 = (state_34710[(2)]);
var state_34710__$1 = state_34710;
var statearr_34724_35910 = state_34710__$1;
(statearr_34724_35910[(2)] = inst_34699);

(statearr_34724_35910[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34711 === (13))){
var state_34710__$1 = state_34710;
var statearr_34725_35911 = state_34710__$1;
(statearr_34725_35911[(2)] = null);

(statearr_34725_35911[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34711 === (6))){
var inst_34674 = (state_34710[(7)]);
var inst_34695 = (inst_34674 > (0));
var state_34710__$1 = state_34710;
if(cljs.core.truth_(inst_34695)){
var statearr_34731_35912 = state_34710__$1;
(statearr_34731_35912[(1)] = (12));

} else {
var statearr_34732_35913 = state_34710__$1;
(statearr_34732_35913[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34711 === (3))){
var inst_34708 = (state_34710[(2)]);
var state_34710__$1 = state_34710;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34710__$1,inst_34708);
} else {
if((state_val_34711 === (12))){
var inst_34673 = (state_34710[(8)]);
var inst_34697 = cljs.core.vec(inst_34673);
var state_34710__$1 = state_34710;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34710__$1,(15),out,inst_34697);
} else {
if((state_val_34711 === (2))){
var state_34710__$1 = state_34710;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34710__$1,(4),ch);
} else {
if((state_val_34711 === (11))){
var inst_34689 = (state_34710[(2)]);
var inst_34690 = (new Array(n));
var inst_34673 = inst_34690;
var inst_34674 = (0);
var state_34710__$1 = (function (){var statearr_34733 = state_34710;
(statearr_34733[(7)] = inst_34674);

(statearr_34733[(10)] = inst_34689);

(statearr_34733[(8)] = inst_34673);

return statearr_34733;
})();
var statearr_34734_35918 = state_34710__$1;
(statearr_34734_35918[(2)] = null);

(statearr_34734_35918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34711 === (9))){
var inst_34673 = (state_34710[(8)]);
var inst_34687 = cljs.core.vec(inst_34673);
var state_34710__$1 = state_34710;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34710__$1,(11),out,inst_34687);
} else {
if((state_val_34711 === (5))){
var inst_34677 = (state_34710[(9)]);
var inst_34674 = (state_34710[(7)]);
var inst_34682 = (state_34710[(11)]);
var inst_34673 = (state_34710[(8)]);
var inst_34681 = (inst_34673[inst_34674] = inst_34677);
var inst_34682__$1 = (inst_34674 + (1));
var inst_34683 = (inst_34682__$1 < n);
var state_34710__$1 = (function (){var statearr_34737 = state_34710;
(statearr_34737[(12)] = inst_34681);

(statearr_34737[(11)] = inst_34682__$1);

return statearr_34737;
})();
if(cljs.core.truth_(inst_34683)){
var statearr_34738_35919 = state_34710__$1;
(statearr_34738_35919[(1)] = (8));

} else {
var statearr_34739_35920 = state_34710__$1;
(statearr_34739_35920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34711 === (14))){
var inst_34702 = (state_34710[(2)]);
var inst_34704 = cljs.core.async.close_BANG_(out);
var state_34710__$1 = (function (){var statearr_34741 = state_34710;
(statearr_34741[(13)] = inst_34702);

return statearr_34741;
})();
var statearr_34742_35921 = state_34710__$1;
(statearr_34742_35921[(2)] = inst_34704);

(statearr_34742_35921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34711 === (10))){
var inst_34693 = (state_34710[(2)]);
var state_34710__$1 = state_34710;
var statearr_34748_35923 = state_34710__$1;
(statearr_34748_35923[(2)] = inst_34693);

(statearr_34748_35923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34711 === (8))){
var inst_34682 = (state_34710[(11)]);
var inst_34673 = (state_34710[(8)]);
var tmp34740 = inst_34673;
var inst_34673__$1 = tmp34740;
var inst_34674 = inst_34682;
var state_34710__$1 = (function (){var statearr_34749 = state_34710;
(statearr_34749[(7)] = inst_34674);

(statearr_34749[(8)] = inst_34673__$1);

return statearr_34749;
})();
var statearr_34750_35925 = state_34710__$1;
(statearr_34750_35925[(2)] = null);

(statearr_34750_35925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32104__auto__ = null;
var cljs$core$async$state_machine__32104__auto____0 = (function (){
var statearr_34751 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34751[(0)] = cljs$core$async$state_machine__32104__auto__);

(statearr_34751[(1)] = (1));

return statearr_34751;
});
var cljs$core$async$state_machine__32104__auto____1 = (function (state_34710){
while(true){
var ret_value__32105__auto__ = (function (){try{while(true){
var result__32106__auto__ = switch__32103__auto__(state_34710);
if(cljs.core.keyword_identical_QMARK_(result__32106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32106__auto__;
}
break;
}
}catch (e34752){var ex__32107__auto__ = e34752;
var statearr_34753_35926 = state_34710;
(statearr_34753_35926[(2)] = ex__32107__auto__);


if(cljs.core.seq((state_34710[(4)]))){
var statearr_34754_35927 = state_34710;
(statearr_34754_35927[(1)] = cljs.core.first((state_34710[(4)])));

} else {
throw ex__32107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35928 = state_34710;
state_34710 = G__35928;
continue;
} else {
return ret_value__32105__auto__;
}
break;
}
});
cljs$core$async$state_machine__32104__auto__ = function(state_34710){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32104__auto____1.call(this,state_34710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32104__auto____0;
cljs$core$async$state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32104__auto____1;
return cljs$core$async$state_machine__32104__auto__;
})()
})();
var state__32624__auto__ = (function (){var statearr_34755 = f__32623__auto__();
(statearr_34755[(6)] = c__32622__auto___35897);

return statearr_34755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32624__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34761 = arguments.length;
switch (G__34761) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32622__auto___35934 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32623__auto__ = (function (){var switch__32103__auto__ = (function (state_34816){
var state_val_34817 = (state_34816[(1)]);
if((state_val_34817 === (7))){
var inst_34812 = (state_34816[(2)]);
var state_34816__$1 = state_34816;
var statearr_34818_35935 = state_34816__$1;
(statearr_34818_35935[(2)] = inst_34812);

(statearr_34818_35935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34817 === (1))){
var inst_34769 = [];
var inst_34770 = inst_34769;
var inst_34771 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34816__$1 = (function (){var statearr_34819 = state_34816;
(statearr_34819[(7)] = inst_34771);

(statearr_34819[(8)] = inst_34770);

return statearr_34819;
})();
var statearr_34820_35936 = state_34816__$1;
(statearr_34820_35936[(2)] = null);

(statearr_34820_35936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34817 === (4))){
var inst_34774 = (state_34816[(9)]);
var inst_34774__$1 = (state_34816[(2)]);
var inst_34778 = (inst_34774__$1 == null);
var inst_34779 = cljs.core.not(inst_34778);
var state_34816__$1 = (function (){var statearr_34824 = state_34816;
(statearr_34824[(9)] = inst_34774__$1);

return statearr_34824;
})();
if(inst_34779){
var statearr_34825_35937 = state_34816__$1;
(statearr_34825_35937[(1)] = (5));

} else {
var statearr_34826_35938 = state_34816__$1;
(statearr_34826_35938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34817 === (15))){
var inst_34770 = (state_34816[(8)]);
var inst_34804 = cljs.core.vec(inst_34770);
var state_34816__$1 = state_34816;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34816__$1,(18),out,inst_34804);
} else {
if((state_val_34817 === (13))){
var inst_34799 = (state_34816[(2)]);
var state_34816__$1 = state_34816;
var statearr_34827_35943 = state_34816__$1;
(statearr_34827_35943[(2)] = inst_34799);

(statearr_34827_35943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34817 === (6))){
var inst_34770 = (state_34816[(8)]);
var inst_34801 = inst_34770.length;
var inst_34802 = (inst_34801 > (0));
var state_34816__$1 = state_34816;
if(cljs.core.truth_(inst_34802)){
var statearr_34828_35944 = state_34816__$1;
(statearr_34828_35944[(1)] = (15));

} else {
var statearr_34829_35945 = state_34816__$1;
(statearr_34829_35945[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34817 === (17))){
var inst_34809 = (state_34816[(2)]);
var inst_34810 = cljs.core.async.close_BANG_(out);
var state_34816__$1 = (function (){var statearr_34830 = state_34816;
(statearr_34830[(10)] = inst_34809);

return statearr_34830;
})();
var statearr_34831_35946 = state_34816__$1;
(statearr_34831_35946[(2)] = inst_34810);

(statearr_34831_35946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34817 === (3))){
var inst_34814 = (state_34816[(2)]);
var state_34816__$1 = state_34816;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34816__$1,inst_34814);
} else {
if((state_val_34817 === (12))){
var inst_34770 = (state_34816[(8)]);
var inst_34792 = cljs.core.vec(inst_34770);
var state_34816__$1 = state_34816;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34816__$1,(14),out,inst_34792);
} else {
if((state_val_34817 === (2))){
var state_34816__$1 = state_34816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34816__$1,(4),ch);
} else {
if((state_val_34817 === (11))){
var inst_34774 = (state_34816[(9)]);
var inst_34770 = (state_34816[(8)]);
var inst_34781 = (state_34816[(11)]);
var inst_34789 = inst_34770.push(inst_34774);
var tmp34832 = inst_34770;
var inst_34770__$1 = tmp34832;
var inst_34771 = inst_34781;
var state_34816__$1 = (function (){var statearr_34833 = state_34816;
(statearr_34833[(12)] = inst_34789);

(statearr_34833[(7)] = inst_34771);

(statearr_34833[(8)] = inst_34770__$1);

return statearr_34833;
})();
var statearr_34834_35951 = state_34816__$1;
(statearr_34834_35951[(2)] = null);

(statearr_34834_35951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34817 === (9))){
var inst_34771 = (state_34816[(7)]);
var inst_34785 = cljs.core.keyword_identical_QMARK_(inst_34771,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34816__$1 = state_34816;
var statearr_34835_35952 = state_34816__$1;
(statearr_34835_35952[(2)] = inst_34785);

(statearr_34835_35952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34817 === (5))){
var inst_34771 = (state_34816[(7)]);
var inst_34782 = (state_34816[(13)]);
var inst_34774 = (state_34816[(9)]);
var inst_34781 = (state_34816[(11)]);
var inst_34781__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34774) : f.call(null,inst_34774));
var inst_34782__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34781__$1,inst_34771);
var state_34816__$1 = (function (){var statearr_34836 = state_34816;
(statearr_34836[(13)] = inst_34782__$1);

(statearr_34836[(11)] = inst_34781__$1);

return statearr_34836;
})();
if(inst_34782__$1){
var statearr_34837_35953 = state_34816__$1;
(statearr_34837_35953[(1)] = (8));

} else {
var statearr_34838_35955 = state_34816__$1;
(statearr_34838_35955[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34817 === (14))){
var inst_34774 = (state_34816[(9)]);
var inst_34781 = (state_34816[(11)]);
var inst_34794 = (state_34816[(2)]);
var inst_34795 = [];
var inst_34796 = inst_34795.push(inst_34774);
var inst_34770 = inst_34795;
var inst_34771 = inst_34781;
var state_34816__$1 = (function (){var statearr_34839 = state_34816;
(statearr_34839[(14)] = inst_34796);

(statearr_34839[(7)] = inst_34771);

(statearr_34839[(8)] = inst_34770);

(statearr_34839[(15)] = inst_34794);

return statearr_34839;
})();
var statearr_34840_35956 = state_34816__$1;
(statearr_34840_35956[(2)] = null);

(statearr_34840_35956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34817 === (16))){
var state_34816__$1 = state_34816;
var statearr_34841_35960 = state_34816__$1;
(statearr_34841_35960[(2)] = null);

(statearr_34841_35960[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34817 === (10))){
var inst_34787 = (state_34816[(2)]);
var state_34816__$1 = state_34816;
if(cljs.core.truth_(inst_34787)){
var statearr_34842_35961 = state_34816__$1;
(statearr_34842_35961[(1)] = (11));

} else {
var statearr_34843_35964 = state_34816__$1;
(statearr_34843_35964[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34817 === (18))){
var inst_34806 = (state_34816[(2)]);
var state_34816__$1 = state_34816;
var statearr_34844_35967 = state_34816__$1;
(statearr_34844_35967[(2)] = inst_34806);

(statearr_34844_35967[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34817 === (8))){
var inst_34782 = (state_34816[(13)]);
var state_34816__$1 = state_34816;
var statearr_34845_35969 = state_34816__$1;
(statearr_34845_35969[(2)] = inst_34782);

(statearr_34845_35969[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32104__auto__ = null;
var cljs$core$async$state_machine__32104__auto____0 = (function (){
var statearr_34846 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34846[(0)] = cljs$core$async$state_machine__32104__auto__);

(statearr_34846[(1)] = (1));

return statearr_34846;
});
var cljs$core$async$state_machine__32104__auto____1 = (function (state_34816){
while(true){
var ret_value__32105__auto__ = (function (){try{while(true){
var result__32106__auto__ = switch__32103__auto__(state_34816);
if(cljs.core.keyword_identical_QMARK_(result__32106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32106__auto__;
}
break;
}
}catch (e34847){var ex__32107__auto__ = e34847;
var statearr_34848_35977 = state_34816;
(statearr_34848_35977[(2)] = ex__32107__auto__);


if(cljs.core.seq((state_34816[(4)]))){
var statearr_34849_35979 = state_34816;
(statearr_34849_35979[(1)] = cljs.core.first((state_34816[(4)])));

} else {
throw ex__32107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35980 = state_34816;
state_34816 = G__35980;
continue;
} else {
return ret_value__32105__auto__;
}
break;
}
});
cljs$core$async$state_machine__32104__auto__ = function(state_34816){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32104__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32104__auto____1.call(this,state_34816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32104__auto____0;
cljs$core$async$state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32104__auto____1;
return cljs$core$async$state_machine__32104__auto__;
})()
})();
var state__32624__auto__ = (function (){var statearr_34850 = f__32623__auto__();
(statearr_34850[(6)] = c__32622__auto___35934);

return statearr_34850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32624__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
