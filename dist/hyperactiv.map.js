!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.hyperactiv=t()}(this,function(){"use strict";const e=[],t=new WeakMap,n=function(e){return e&&"object"==typeof e},o=Array.isArray,r=function(e,t,n){Object.defineProperty(e,"__key",{value:t,enumerable:!1,configurable:!0}),Object.defineProperty(e,"__parent",{value:n,enumerable:!1,configurable:!0})},u={timeout:null,queue:new Set,process(){for(const e of u.queue)e();u.queue.clear(),u.timeout=null},enqueue(e){null===u.timeout&&(u.timeout=setTimeout(u.process,0)),u.queue.add(e)}};return{observe:function c(i,s={}){const{props:f,ignore:a,batch:p,deep:d,handler:l,bind:y}=s;if(i.__observed)return i;t.set(i,new Map),d&&Object.entries(i).forEach(function([e,t]){n(t)&&(i[e]=c(t,s),l&&r(i[e],e,i))});const b=new Proxy(i,{get(n,o){if("__observed"===o)return!0;if((!f||f.includes(o))&&(!a||!a.includes(o))&&e.length){const n=t.get(i);n.has(o)||n.set(o,new Set),n.get(o).add(e[0])}return i[o]},set(y,_,h){const m=t.get(i);if(f&&!f.includes(_)||a&&a.includes(_))return i[_]=h,!0;if((!o(i)||"length"!==_)&&i[_]===h)return!0;if(i[_]=d&&n(h)?c(h,s):h,l&&d&&n(h)&&r(i[_],_,i),l){const e=[_];let t=i;for(;t.__key&&t.__parent;)e.unshift(t.__key),t=t.__parent;l(e,h,b)}if(m.has(_)){const t=m.get(_);for(const n of t)n.__disposed?t.delete(n):n!==e[0]&&(p?u.enqueue(n):n())}return!0}});y&&Object.getOwnPropertyNames(i).concat(Object.getOwnPropertyNames(Object.getPrototypeOf(i))).filter(e=>"constructor"!==e&&"function"==typeof i[e]).forEach(e=>i[e]=i[e].bind(b));return b},computed:function(t,{autoRun:n=!0,callback:o,bind:r}={}){const u=new Proxy(t,{apply(t,n,c){const i=function(i){e.unshift(o||u);const s=i?i():t.apply(r||n,c);return e.shift(),s};return c.push({computeAsync:function(e){return i(e)}}),i()}});return n&&u(),u},dispose:function(e){return e.__disposed=!0}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHlwZXJhY3Rpdi5tYXAuanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb21wdXRlZFN0YWNrID0gW11cbmNvbnN0IG9ic2VydmVyc01hcCA9IG5ldyBXZWFrTWFwKClcblxuLyogVG9vbHMgKi9cblxuY29uc3QgaXNPYmogPSBmdW5jdGlvbihvKSB7IHJldHVybiBvICYmIHR5cGVvZiBvID09PSAnb2JqZWN0JyB9XG5jb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheVxuY29uc3QgZGVmaW5lQnViYmxpbmdQcm9wZXJ0aWVzID0gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHBhcmVudCkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmplY3QsICdfX2tleScsIHsgdmFsdWU6IGtleSwgZW51bWVyYWJsZTogZmFsc2UsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmplY3QsICdfX3BhcmVudCcsIHsgdmFsdWU6IHBhcmVudCwgZW51bWVyYWJsZTogZmFsc2UsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KVxufVxuXG5jb25zdCBiYXRjaGVyID0ge1xuICAgIHRpbWVvdXQ6IG51bGwsXG4gICAgcXVldWU6IG5ldyBTZXQoKSxcbiAgICBwcm9jZXNzKCkge1xuICAgICAgICBmb3IoY29uc3QgdGFzayBvZiBiYXRjaGVyLnF1ZXVlKVxuICAgICAgICAgICAgdGFzaygpXG4gICAgICAgIGJhdGNoZXIucXVldWUuY2xlYXIoKVxuICAgICAgICBiYXRjaGVyLnRpbWVvdXQgPSBudWxsXG4gICAgfSxcbiAgICBlbnF1ZXVlKHRhc2spIHtcbiAgICAgICAgaWYoYmF0Y2hlci50aW1lb3V0ID09PSBudWxsKVxuICAgICAgICAgICAgYmF0Y2hlci50aW1lb3V0ID0gc2V0VGltZW91dChiYXRjaGVyLnByb2Nlc3MsIDApXG4gICAgICAgIGJhdGNoZXIucXVldWUuYWRkKHRhc2spXG4gICAgfVxufVxuXG4vKiBDb21wdXRlZCAqL1xuXG5mdW5jdGlvbiBjb21wdXRlZCh3cmFwcGVkRnVuY3Rpb24sIHsgYXV0b1J1biA9IHRydWUsIGNhbGxiYWNrLCBiaW5kIH0gPSB7fSkge1xuICAgIC8vIFByb3hpZnkgdGhlIGZ1bmN0aW9uIGluIG9yZGVyIHRvIGludGVyY2VwdCB0aGUgY2FsbHNcbiAgICBjb25zdCBwcm94eSA9IG5ldyBQcm94eSh3cmFwcGVkRnVuY3Rpb24sIHtcbiAgICAgICAgYXBwbHkodGFyZ2V0LCB0aGlzQXJnLCBhcmdzTGlzdCkge1xuICAgICAgICAgICAgY29uc3Qgb2JzZXJ2ZUNvbXB1dGF0aW9uID0gZnVuY3Rpb24oZikge1xuICAgICAgICAgICAgICAgIC8vIFN0b3JlIGludG8gdGhlIHN0YWNrIGEgcmVmZXJlbmNlIHRvIHRoZSBjb21wdXRlZCBmdW5jdGlvblxuICAgICAgICAgICAgICAgIGNvbXB1dGVkU3RhY2sudW5zaGlmdChjYWxsYmFjayB8fCBwcm94eSlcbiAgICAgICAgICAgICAgICAvLyBSdW4gdGhlIGNvbXB1dGVkIGZ1bmN0aW9uIC0gb3IgdGhlIGFzeW5jIGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZiA/XG4gICAgICAgICAgICAgICAgICAgIGYoKSA6XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5hcHBseShiaW5kIHx8IHRoaXNBcmcsIGFyZ3NMaXN0KVxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgcmVmZXJlbmNlXG4gICAgICAgICAgICAgICAgY29tcHV0ZWRTdGFjay5zaGlmdCgpXG4gICAgICAgICAgICAgICAgLy8gUmV0dXJuIHRoZSByZXN1bHRcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEluamVjdCB0aGUgY29tcHV0ZUFzeW5jIGFyZ3VtZW50IHdoaWNoIGlzIHVzZWQgdG8gbWFudWFsbHkgZGVjbGFyZSB3aGVuIHRoZSBjb21wdXRhdGlvbiB0YWtlcyBwYXJ0XG4gICAgICAgICAgICBhcmdzTGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBjb21wdXRlQXN5bmM6IGZ1bmN0aW9uKHRhcmdldCkgeyByZXR1cm4gb2JzZXJ2ZUNvbXB1dGF0aW9uKHRhcmdldCkgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgcmV0dXJuIG9ic2VydmVDb21wdXRhdGlvbigpXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC8vIElmIGF1dG9SdW4sIHRoZW4gY2FsbCB0aGUgZnVuY3Rpb24gYXQgb25jZVxuICAgIGlmKGF1dG9SdW4pXG4gICAgICAgIHByb3h5KClcbiAgICByZXR1cm4gcHJveHlcbn1cblxuLyogRGlzcG9zZSAqL1xuXG4vLyBUaGUgZGlzcG9zZWQgZmxhZyB3aGljaCBpcyB1c2VkIHRvIHJlbW92ZSBhIGNvbXB1dGVkIGZ1bmN0aW9uIHJlZmVyZW5jZSBwb2ludGVyXG5mdW5jdGlvbiBkaXNwb3NlKF8pIHsgcmV0dXJuIF8uX19kaXNwb3NlZCA9IHRydWUgfVxuXG4vKiBPYnNlcnZlICovXG5cbmZ1bmN0aW9uIG9ic2VydmUob2JqLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBpZ25vcmUsXG4gICAgICAgIGJhdGNoLFxuICAgICAgICBkZWVwLFxuICAgICAgICBoYW5kbGVyLFxuICAgICAgICBiaW5kXG4gICAgfSA9IG9wdGlvbnNcblxuICAgIC8vIElnbm9yZSBpZiB0aGUgb2JqZWN0IGlzIGFscmVhZHkgb2JzZXJ2ZWRcbiAgICBpZihvYmouX19vYnNlcnZlZClcbiAgICAgICAgcmV0dXJuIG9ialxuXG4gICAgLy8gQWRkIHRoZSBvYmplY3QgdG8gdGhlIG9ic2VydmVycyBtYXAuXG4gICAgLy8gb2JzZXJ2ZXJzTWFwIHNpZ25hdHVyZSA6IE1hcDxPYmplY3QsIE1hcDxQcm9wZXJ0eSwgU2V0PENvbXB1dGVkIGZ1bmN0aW9uPj4+XG4gICAgLy8gSW4gb3RoZXIgd29yZHMsIG9ic2VydmVyc01hcCBpcyBhIG1hcCBvZiBvYnNlcnZlZCBvYmplY3RzLlxuICAgIC8vIEZvciBlYWNoIG9ic2VydmVkIG9iamVjdCwgZWFjaCBwcm9wZXJ0eSBpcyBtYXBwZWQgd2l0aCBhIHNldCBvZiBjb21wdXRlZCBmdW5jdGlvbnMgZGVwZW5kaW5nIG9uIHRoaXMgcHJvcGVydHkuXG4gICAgLy8gV2hlbmV2ZXIgYSBwcm9wZXJ0eSBpcyBzZXQsIHdlIHJlLXJ1biBlYWNoIG9uZSBvZiB0aGUgZnVuY3Rpb25zIHN0b3JlZCBpbnNpZGUgdGhlIG1hdGNoaW5nIFNldC5cbiAgICBvYnNlcnZlcnNNYXAuc2V0KG9iaiwgbmV3IE1hcCgpKVxuXG4gICAgLy8gSWYgdGhlIGRlZXAgZmxhZyBpcyBzZXQsIG9ic2VydmUgbmVzdGVkIG9iamVjdHMvYXJyYXlzXG4gICAgaWYoZGVlcCkge1xuICAgICAgICBPYmplY3QuZW50cmllcyhvYmopLmZvckVhY2goZnVuY3Rpb24oW2tleSwgdmFsXSkge1xuICAgICAgICAgICAgaWYoaXNPYmoodmFsKSkge1xuICAgICAgICAgICAgICAgIG9ialtrZXldID0gb2JzZXJ2ZSh2YWwsIG9wdGlvbnMpXG4gICAgICAgICAgICAgICAgLy8gSWYgYSBoYW5kbGVyIGlzIHNldCwgd2UgYWRkIGtleXMgdG8gdGhlIG9iamVjdCB1c2VkIHRvIGJ1YmJsZSB1cCB0aGUgbXV0YXRpb25cbiAgICAgICAgICAgICAgICBpZihoYW5kbGVyKVxuICAgICAgICAgICAgICAgICAgICBkZWZpbmVCdWJibGluZ1Byb3BlcnRpZXMob2JqW2tleV0sIGtleSwgb2JqKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIFByb3hpZnkgdGhlIG9iamVjdCBpbiBvcmRlciB0byBpbnRlcmNlcHQgZ2V0L3NldCBvbiBwcm9wc1xuICAgIGNvbnN0IHByb3h5ID0gbmV3IFByb3h5KG9iaiwge1xuICAgICAgICBnZXQoXywgcHJvcCkge1xuICAgICAgICAgICAgaWYocHJvcCA9PT0gJ19fb2JzZXJ2ZWQnKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBwcm9wIGlzIHdhdGNoZWRcbiAgICAgICAgICAgIGlmKCghcHJvcHMgfHwgcHJvcHMuaW5jbHVkZXMocHJvcCkpICYmICghaWdub3JlIHx8ICFpZ25vcmUuaW5jbHVkZXMocHJvcCkpKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYSBjb21wdXRlZCBmdW5jdGlvbiBpcyBiZWluZyBydW5cbiAgICAgICAgICAgICAgICBpZihjb21wdXRlZFN0YWNrLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wZXJ0aWVzTWFwID0gb2JzZXJ2ZXJzTWFwLmdldChvYmopXG4gICAgICAgICAgICAgICAgICAgIGlmKCFwcm9wZXJ0aWVzTWFwLmhhcyhwcm9wKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXNNYXAuc2V0KHByb3AsIG5ldyBTZXQoKSlcbiAgICAgICAgICAgICAgICAgICAgLy8gTGluayB0aGUgY29tcHV0ZWQgZnVuY3Rpb24gYW5kIHRoZSBwcm9wZXJ0eSBiZWluZyBhY2Nlc3NlZFxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzTWFwLmdldChwcm9wKS5hZGQoY29tcHV0ZWRTdGFja1swXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBvYmpbcHJvcF1cbiAgICAgICAgfSxcbiAgICAgICAgc2V0KF8sIHByb3AsIHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0aWVzTWFwID0gb2JzZXJ2ZXJzTWFwLmdldChvYmopXG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBwcm9wIGlzIGlnbm9yZWRcbiAgICAgICAgICAgIGlmKHByb3BzICYmICFwcm9wcy5pbmNsdWRlcyhwcm9wKSB8fCBpZ25vcmUgJiYgaWdub3JlLmluY2x1ZGVzKHByb3ApKSB7XG4gICAgICAgICAgICAgICAgb2JqW3Byb3BdID0gdmFsdWVcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB0aGUgbmV3L29sZCB2YWx1ZSBhcmUgZXF1YWwsIHJldHVyblxuICAgICAgICAgICAgaWYoKCFpc0FycmF5KG9iaikgfHwgcHJvcCAhPT0gJ2xlbmd0aCcpICYmIG9ialtwcm9wXSA9PT0gdmFsdWUpIHJldHVybiB0cnVlXG4gICAgICAgICAgICAvLyBJZiB0aGUgZGVlcCBmbGFnIGlzIHNldCB3ZSBvYnNlcnZlIHRoZSBuZXdseSBzZXQgdmFsdWVcbiAgICAgICAgICAgIG9ialtwcm9wXSA9IGRlZXAgJiYgaXNPYmoodmFsdWUpID8gb2JzZXJ2ZSh2YWx1ZSwgb3B0aW9ucykgOiB2YWx1ZVxuICAgICAgICAgICAgLy8gSWYgd2UgZGVmaW5lZCBhIGhhbmRsZXIsIHdlIGRlZmluZSB0aGUgYnViYmxpbmcga2V5cyByZWN1cnNpdmVseSBvbiB0aGUgbmV3IHZhbHVlXG4gICAgICAgICAgICBoYW5kbGVyICYmIGRlZXAgJiYgaXNPYmoodmFsdWUpICYmIGRlZmluZUJ1YmJsaW5nUHJvcGVydGllcyhvYmpbcHJvcF0sIHByb3AsIG9iailcblxuICAgICAgICAgICAgaWYoaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIC8vIFJldHJpZXZlIHRoZSBtdXRhdGVkIHByb3BlcnRpZXMgY2hhaW4gJiBjYWxsIHRoZSBoYW5kbGVyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5jZXN0cnkgPSBbIHByb3AgXVxuICAgICAgICAgICAgICAgIGxldCBwYXJlbnQgPSBvYmpcbiAgICAgICAgICAgICAgICB3aGlsZShwYXJlbnQuX19rZXkgJiYgcGFyZW50Ll9fcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGFuY2VzdHJ5LnVuc2hpZnQocGFyZW50Ll9fa2V5KVxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQuX19wYXJlbnRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaGFuZGxlcihhbmNlc3RyeSwgdmFsdWUsIHByb3h5KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihwcm9wZXJ0aWVzTWFwLmhhcyhwcm9wKSkge1xuICAgICAgICAgICAgICAgIC8vIFJldHJpZXZlIHRoZSBjb21wdXRlZCBmdW5jdGlvbnMgZGVwZW5kaW5nIG9uIHRoZSBwcm9wXG4gICAgICAgICAgICAgICAgY29uc3QgZGVwZW5kZW50cyA9IHByb3BlcnRpZXNNYXAuZ2V0KHByb3ApXG4gICAgICAgICAgICAgICAgZm9yKGNvbnN0IGRlcGVuZGVudCBvZiBkZXBlbmRlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGRpc3Bvc2VkLCBkZWxldGUgdGhlIGZ1bmN0aW9uIHJlZmVyZW5jZVxuICAgICAgICAgICAgICAgICAgICBpZihkZXBlbmRlbnQuX19kaXNwb3NlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVwZW5kZW50cy5kZWxldGUoZGVwZW5kZW50KVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZGVwZW5kZW50ICE9PSBjb21wdXRlZFN0YWNrWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSdW4gdGhlIGNvbXB1dGVkIGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihiYXRjaCkgYmF0Y2hlci5lbnF1ZXVlKGRlcGVuZGVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgZGVwZW5kZW50KClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBpZihiaW5kKSB7XG4gICAgICAgIC8vIE5lZWQgdGhpcyBmb3IgYmluZGluZyBlczYgY2xhc3NlcyBtZXRob2RzIHdoaWNoIGFyZSBzdG9yZWQgaW4gdGhlIG9iamVjdCBwcm90b3R5cGVcbiAgICAgICAgY29uc3QgbWV0aG9kcyA9XG4gICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopXG4gICAgICAgICAgICAgICAgLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSkpXG4gICAgICAgICAgICAgICAgLmZpbHRlcihwcm9wID0+IHByb3AgIT09ICdjb25zdHJ1Y3RvcicgJiYgdHlwZW9mIG9ialtwcm9wXSA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgbWV0aG9kcy5mb3JFYWNoKGtleSA9PiBvYmpba2V5XSA9IG9ialtrZXldLmJpbmQocHJveHkpKVxuICAgIH1cblxuICAgIHJldHVybiBwcm94eVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgb2JzZXJ2ZSxcbiAgICBjb21wdXRlZCxcbiAgICBkaXNwb3NlXG59Il0sIm5hbWVzIjpbImNvbXB1dGVkU3RhY2siLCJvYnNlcnZlcnNNYXAiLCJXZWFrTWFwIiwiaXNPYmoiLCJvIiwiaXNBcnJheSIsIkFycmF5IiwiZGVmaW5lQnViYmxpbmdQcm9wZXJ0aWVzIiwib2JqZWN0Iiwia2V5IiwicGFyZW50IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJiYXRjaGVyIiwidGltZW91dCIsInF1ZXVlIiwiU2V0IiwiW29iamVjdCBPYmplY3RdIiwidGFzayIsImNsZWFyIiwic2V0VGltZW91dCIsInByb2Nlc3MiLCJhZGQiLCJvYnNlcnZlIiwib2JqIiwib3B0aW9ucyIsInByb3BzIiwiaWdub3JlIiwiYmF0Y2giLCJkZWVwIiwiaGFuZGxlciIsImJpbmQiLCJfX29ic2VydmVkIiwic2V0IiwiTWFwIiwiZW50cmllcyIsImZvckVhY2giLCJ2YWwiLCJwcm94eSIsIlByb3h5IiwiXyIsInByb3AiLCJpbmNsdWRlcyIsImxlbmd0aCIsInByb3BlcnRpZXNNYXAiLCJnZXQiLCJoYXMiLCJhbmNlc3RyeSIsIl9fa2V5IiwiX19wYXJlbnQiLCJ1bnNoaWZ0IiwiZGVwZW5kZW50cyIsImRlcGVuZGVudCIsIl9fZGlzcG9zZWQiLCJkZWxldGUiLCJlbnF1ZXVlIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImNvbmNhdCIsImdldFByb3RvdHlwZU9mIiwiZmlsdGVyIiwiY29tcHV0ZWQiLCJ3cmFwcGVkRnVuY3Rpb24iLCJhdXRvUnVuIiwiY2FsbGJhY2siLCJ0YXJnZXQiLCJ0aGlzQXJnIiwiYXJnc0xpc3QiLCJvYnNlcnZlQ29tcHV0YXRpb24iLCJmIiwicmVzdWx0IiwiYXBwbHkiLCJzaGlmdCIsInB1c2giLCJjb21wdXRlQXN5bmMiLCJkaXNwb3NlIl0sIm1hcHBpbmdzIjoic0xBQUEsTUFBTUEsS0FDQUMsRUFBZSxJQUFJQyxRQUluQkMsRUFBUSxTQUFTQyxHQUFLLE9BQU9BLEdBQWtCLGlCQUFOQSxHQUN6Q0MsRUFBVUMsTUFBTUQsUUFDaEJFLEVBQTJCLFNBQVNDLEVBQVFDLEVBQUtDLEdBQ25EQyxPQUFPQyxlQUFlSixFQUFRLFNBQVdLLE1BQU9KLEVBQUtLLFlBQVksRUFBT0MsY0FBYyxJQUN0RkosT0FBT0MsZUFBZUosRUFBUSxZQUFjSyxNQUFPSCxFQUFRSSxZQUFZLEVBQU9DLGNBQWMsS0FHMUZDLEdBQ0ZDLFFBQVMsS0FDVEMsTUFBTyxJQUFJQyxJQUNYQyxVQUNJLElBQUksTUFBTUMsS0FBUUwsRUFBUUUsTUFDdEJHLElBQ0pMLEVBQVFFLE1BQU1JLFFBQ2ROLEVBQVFDLFFBQVUsTUFFdEJHLFFBQVFDLEdBQ21CLE9BQXBCTCxFQUFRQyxVQUNQRCxFQUFRQyxRQUFVTSxXQUFXUCxFQUFRUSxRQUFTLElBQ2xEUixFQUFRRSxNQUFNTyxJQUFJSixZQTRKdEJLLFFBaEhKLFNBQVNBLEVBQVFDLEVBQUtDLE1BQ2xCLE1BQU1DLE1BQ0ZBLEVBQUtDLE9BQ0xBLEVBQU1DLE1BQ05BLEVBQUtDLEtBQ0xBLEVB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
