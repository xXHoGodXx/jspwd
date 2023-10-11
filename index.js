let i
let ask =+ prompt(`Введи пароль`);
let pass = 456;

do{
    i = 3
  if(ask !== pass){
    ask =+ prompt(`У вас ещё ${i} попытки`);
  }
  else if(ask == pass , i == 3){
    console.log(`Добро пожаловать`);
    
  }
 else if (0)
    console.log("Попробуйте позже");
  i--
} while(i>0);
