const receivesAFunction = (callback) => {

    callback();
  };
  const returnsANamedFunction = () => {

    return function namedFunction() {

      return "I am a named function!";
    };
  };
  const returnsAnAnonymousFunction = () => {

    return function () {
        
      return "I am an anonymous function!";
    };
  };
  
  
  