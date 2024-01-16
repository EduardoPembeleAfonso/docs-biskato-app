'use strict';


/**
 * Rota para autenticao de usuarios
 * Faz a autenticao de usuarios usando o email e a senha
 *
 * body UserAuth Faz a autenticao de usuarios usando o seu email e a sua senha
 * returns User
 **/
exports.addPet = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "image" : "my_photo.png",
  "password" : "12345678",
  "address" : "Luanda, viana",
  "phone" : "936654821",
  "pin_code" : "1234",
  "name" : "Edocha Afonso",
  "id" : 1,
  "email" : "eduardo01@email.com",
  "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Rota para autenticao de usuarios
 * Faz a autenticao de usuarios usando o email e a senha
 *
 * body UserAuth Faz a autenticao de usuarios usando o seu email e a sua senha
 * returns User
 **/
exports.addPet = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "image" : "my_photo.png",
  "password" : "12345678",
  "address" : "Luanda, viana",
  "phone" : "936654821",
  "pin_code" : "1234",
  "name" : "Edocha Afonso",
  "id" : 1,
  "email" : "eduardo01@email.com",
  "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Rota para editar o codigo pin de um usuario
 * Faz a edicao do codigo pin de um usuario, precisa substituir o id pelo id do usuario a ser editado e precisa de um token gerado na autenticacao ou registro
 *
 * body UserChangeCodePin Para editar o codigo pin de um usuario is preciso preencher os campos abaixos
 * id Long ID do usuario a ser editado
 * returns UserUpdateResponse
 **/
exports.editCodePinUser = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "image" : "my_photo.png",
  "country" : "Angola",
  "address" : "Luanda, viana",
  "birth_date" : "07/07/2001",
  "pin_code" : "1234",
  "nif" : "LA1234AOB2",
  "password" : "12345678",
  "province" : "Luanda",
  "phone" : "936654821",
  "name" : "Edocha Afonso",
  "genre" : "Masculino",
  "id" : 1,
  "email" : "eduardo01@email.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Rota para editar o codigo pin de um usuario
 * Faz a edicao do codigo pin de um usuario, precisa substituir o id pelo id do usuario a ser editado e precisa de um token gerado na autenticacao ou registro
 *
 * body UserChangeCodePin Para editar o codigo pin de um usuario is preciso preencher os campos abaixos
 * id Long ID do usuario a ser editado
 * returns UserUpdateResponse
 **/
exports.editCodePinUser = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "image" : "my_photo.png",
  "country" : "Angola",
  "address" : "Luanda, viana",
  "birth_date" : "07/07/2001",
  "pin_code" : "1234",
  "nif" : "LA1234AOB2",
  "password" : "12345678",
  "province" : "Luanda",
  "phone" : "936654821",
  "name" : "Edocha Afonso",
  "genre" : "Masculino",
  "id" : 1,
  "email" : "eduardo01@email.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Rota para editar a senha de um usuario
 * Faz a edicao da senha de um usuario, precisa substituir o id pelo id do usuario a ser editado e precisa de um token gerado na autenticacao ou registro
 *
 * body UserChangePassword Para editar a senha de um usuario is preciso preencher os campos abaixos
 * id Long ID do usuario a ser editado
 * returns UserUpdateResponse
 **/
exports.editPasswordUser = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "image" : "my_photo.png",
  "country" : "Angola",
  "address" : "Luanda, viana",
  "birth_date" : "07/07/2001",
  "pin_code" : "1234",
  "nif" : "LA1234AOB2",
  "password" : "12345678",
  "province" : "Luanda",
  "phone" : "936654821",
  "name" : "Edocha Afonso",
  "genre" : "Masculino",
  "id" : 1,
  "email" : "eduardo01@email.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Rota para editar a senha de um usuario
 * Faz a edicao da senha de um usuario, precisa substituir o id pelo id do usuario a ser editado e precisa de um token gerado na autenticacao ou registro
 *
 * body UserChangePassword Para editar a senha de um usuario is preciso preencher os campos abaixos
 * id Long ID do usuario a ser editado
 * returns UserUpdateResponse
 **/
exports.editPasswordUser = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "image" : "my_photo.png",
  "country" : "Angola",
  "address" : "Luanda, viana",
  "birth_date" : "07/07/2001",
  "pin_code" : "1234",
  "nif" : "LA1234AOB2",
  "password" : "12345678",
  "province" : "Luanda",
  "phone" : "936654821",
  "name" : "Edocha Afonso",
  "genre" : "Masculino",
  "id" : 1,
  "email" : "eduardo01@email.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Rota para editar dados de usuarios
 * Faz a edicao dos dados dos usuarios, precisa substituir o id pelo id do usuario a ser editado e precisa de um token gerado na autenticacao ou registro
 *
 * body UserUpdate Para editar o usuario e preciso preencher os campos abaixos
 * id Long ID do usuario a ser editado
 * returns UserUpdateResponse
 **/
exports.editUser = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "image" : "my_photo.png",
  "country" : "Angola",
  "address" : "Luanda, viana",
  "birth_date" : "07/07/2001",
  "pin_code" : "1234",
  "nif" : "LA1234AOB2",
  "password" : "12345678",
  "province" : "Luanda",
  "phone" : "936654821",
  "name" : "Edocha Afonso",
  "genre" : "Masculino",
  "id" : 1,
  "email" : "eduardo01@email.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Rota para editar dados de usuarios
 * Faz a edicao dos dados dos usuarios, precisa substituir o id pelo id do usuario a ser editado e precisa de um token gerado na autenticacao ou registro
 *
 * body UserUpdate Para editar o usuario e preciso preencher os campos abaixos
 * id Long ID do usuario a ser editado
 * returns UserUpdateResponse
 **/
exports.editUser = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "image" : "my_photo.png",
  "country" : "Angola",
  "address" : "Luanda, viana",
  "birth_date" : "07/07/2001",
  "pin_code" : "1234",
  "nif" : "LA1234AOB2",
  "password" : "12345678",
  "province" : "Luanda",
  "phone" : "936654821",
  "name" : "Edocha Afonso",
  "genre" : "Masculino",
  "id" : 1,
  "email" : "eduardo01@email.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Rota para editar dados de usuarios
 * Faz a edicao dos dados dos usuarios, precisa substituir o id pelo id do usuario a ser editado e precisa de um token gerado na autenticacao ou registro
 *
 * body UserUpdate Para editar o usuario e preciso preencher os campos abaixos
 * id Long ID do usuario a ser editado
 * returns UserUpdateResponse
 **/
exports.editUser = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "image" : "my_photo.png",
  "country" : "Angola",
  "address" : "Luanda, viana",
  "birth_date" : "07/07/2001",
  "pin_code" : "1234",
  "nif" : "LA1234AOB2",
  "password" : "12345678",
  "province" : "Luanda",
  "phone" : "936654821",
  "name" : "Edocha Afonso",
  "genre" : "Masculino",
  "id" : 1,
  "email" : "eduardo01@email.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retorna todos os usuarios
 * Retorna uma lista de todos os usuarios registrados - precisas de um token
 *
 * returns AllUsers
 **/
exports.getAllUsers = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "users" : [ {
    "image" : "my_photo.png",
    "country" : "Angola",
    "address" : "Luanda, viana",
    "birth_date" : "07/07/2001",
    "pin_code" : "1234",
    "nif" : "LA1234AOB2",
    "password" : "12345678",
    "province" : "Luanda",
    "phone" : "936654821",
    "name" : "Edocha Afonso",
    "genre" : "Masculino",
    "id" : 1,
    "email" : "eduardo01@email.com"
  }, {
    "image" : "my_photo.png",
    "country" : "Angola",
    "address" : "Luanda, viana",
    "birth_date" : "07/07/2001",
    "pin_code" : "1234",
    "nif" : "LA1234AOB2",
    "password" : "12345678",
    "province" : "Luanda",
    "phone" : "936654821",
    "name" : "Edocha Afonso",
    "genre" : "Masculino",
    "id" : 1,
    "email" : "eduardo01@email.com"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Rota para registro de usuarios
 * Faz o regsitro de novos usuarios
 *
 * body UserRegister Faz a autenticao de usuarios usando o seu o email, nome, phone, pin code e a senha
 * returns User
 **/
exports.registerUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "image" : "my_photo.png",
  "password" : "12345678",
  "address" : "Luanda, viana",
  "phone" : "936654821",
  "pin_code" : "1234",
  "name" : "Edocha Afonso",
  "id" : 1,
  "email" : "eduardo01@email.com",
  "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Rota para registro de usuarios
 * Faz o regsitro de novos usuarios
 *
 * body UserRegister Faz a autenticao de usuarios usando o seu o email, nome, phone, pin code e a senha
 * returns User
 **/
exports.registerUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "image" : "my_photo.png",
  "password" : "12345678",
  "address" : "Luanda, viana",
  "phone" : "936654821",
  "pin_code" : "1234",
  "name" : "Edocha Afonso",
  "id" : 1,
  "email" : "eduardo01@email.com",
  "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Rota para pesquisa de usuarios
 * Essa rota faz a pesquisa de usuarios pelo seu nome ou e-mail, precisa substituir o search pelo nome ou e-mail do usuario a ser pesquisado e precisa de um token gerado na autenticacao ou registro
 *
 * search String SEARCH nome ou e-mail do usuario a ser pesquisado
 * returns AllUsers
 **/
exports.searchUser = function(search) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "users" : [ {
    "image" : "my_photo.png",
    "country" : "Angola",
    "address" : "Luanda, viana",
    "birth_date" : "07/07/2001",
    "pin_code" : "1234",
    "nif" : "LA1234AOB2",
    "password" : "12345678",
    "province" : "Luanda",
    "phone" : "936654821",
    "name" : "Edocha Afonso",
    "genre" : "Masculino",
    "id" : 1,
    "email" : "eduardo01@email.com"
  }, {
    "image" : "my_photo.png",
    "country" : "Angola",
    "address" : "Luanda, viana",
    "birth_date" : "07/07/2001",
    "pin_code" : "1234",
    "nif" : "LA1234AOB2",
    "password" : "12345678",
    "province" : "Luanda",
    "phone" : "936654821",
    "name" : "Edocha Afonso",
    "genre" : "Masculino",
    "id" : 1,
    "email" : "eduardo01@email.com"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Rota para pegar ou ver os dados de apenas um usuario
 * Essa rota retorna os dados de apenas um usuario pelo seu id, precisa substituir o id pelo id do usuario a ser visualizado e precisa de um token gerado na autenticacao ou registro
 *
 * id Long ID do usuario a ser visualizado
 * returns UserUpdateResponse
 **/
exports.viewUser = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "image" : "my_photo.png",
  "country" : "Angola",
  "address" : "Luanda, viana",
  "birth_date" : "07/07/2001",
  "pin_code" : "1234",
  "nif" : "LA1234AOB2",
  "password" : "12345678",
  "province" : "Luanda",
  "phone" : "936654821",
  "name" : "Edocha Afonso",
  "genre" : "Masculino",
  "id" : 1,
  "email" : "eduardo01@email.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

