// Autogenerated by hob
window.cls || (window.cls = {});
cls.EcmascriptDebugger || (cls.EcmascriptDebugger = {});
cls.EcmascriptDebugger["6.0"] || (cls.EcmascriptDebugger["6.0"] = {});

cls.EcmascriptDebugger["6.0"].ConsoleTimeInfo = function(arr)
{
  this.runtimeID = arr[0];
  /** 
    * Timers are identified by a string passed as the first argument
    * to the function. For instance, console.time("MyTimer").
    */
  this.title = arr[1];
};

