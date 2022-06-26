// 10я глава


// 10.2


class FormatError extends SyntaxError {
    constructor(message) {
      super(message);
      this.name = "FormatError";
    }
  }
  
  let err = new FormatError("ошибка");
  
  alert( err.message ); 
  alert( err.name );
  alert( err.stack );
  
  alert( err instanceof SyntaxError );