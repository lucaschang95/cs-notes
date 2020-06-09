# nodejs



**localStorage** 等方法并不是 **V8引擎** 执行的, 而是 **node/ chrome** 执行的 Chrome runtime      

 **就是说, Chrome/node 不仅把 code 传递给了V8, 还把相应的C++ binding传递给了V8引擎**