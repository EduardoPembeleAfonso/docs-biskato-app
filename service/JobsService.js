'use strict';


/**
 * Rota para editar dados de usuarios
 * Faz a edicao dos dados dos usuarios, precisa substituir o id pelo id do usuario a ser editado e precisa de um token gerado na autenticacao ou registro
 *
 * body UserUpdate Para editar o usuario e preciso preencher os campos abaixos
 * id Long ID do usuario a ser editado
 * returns UserUpdateResponse
 **/
exports.editJob = function(body,id) {
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
exports.editJob = function(body,id) {
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
exports.editJob = function(body,id) {
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
 * Rota para publicacao de biskatos
 * Faz o cadastro de novos biskato
 *
 * body Jobs Faz o cadastro e a publicacao de novos biskatos
 * returns JobsUpdateResponse
 **/
exports.pubJobs = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "job" : [ {
    "image" : "biskato_photo.png",
    "requeriments" : [ {
      "item_3" : "Saber pintar o cabelo",
      "item_2" : "Saber fazer laminagem",
      "item_1" : "Saber cortar o cabelo"
    }, {
      "item_3" : "Saber pintar o cabelo",
      "item_2" : "Saber fazer laminagem",
      "item_1" : "Saber cortar o cabelo"
    } ],
    "address" : "Luanda, viana, grafanil",
    "responsibility" : "Cortar bem o cabelo",
    "description" : "Preciso de um barbeiro para cortar cabelo ao meu filho.",
    "id" : 1,
    "remuneration" : "2500",
    "title" : "Preciso de um barbeiro"
  }, {
    "image" : "biskato_photo.png",
    "requeriments" : [ {
      "item_3" : "Saber pintar o cabelo",
      "item_2" : "Saber fazer laminagem",
      "item_1" : "Saber cortar o cabelo"
    }, {
      "item_3" : "Saber pintar o cabelo",
      "item_2" : "Saber fazer laminagem",
      "item_1" : "Saber cortar o cabelo"
    } ],
    "address" : "Luanda, viana, grafanil",
    "responsibility" : "Cortar bem o cabelo",
    "description" : "Preciso de um barbeiro para cortar cabelo ao meu filho.",
    "id" : 1,
    "remuneration" : "2500",
    "title" : "Preciso de um barbeiro"
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
 * Rota para publicacao de biskatos
 * Faz o cadastro de novos biskato
 *
 * body Jobs Faz o cadastro e a publicacao de novos biskatos
 * returns JobsUpdateResponse
 **/
exports.pubJobs = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "job" : [ {
    "image" : "biskato_photo.png",
    "requeriments" : [ {
      "item_3" : "Saber pintar o cabelo",
      "item_2" : "Saber fazer laminagem",
      "item_1" : "Saber cortar o cabelo"
    }, {
      "item_3" : "Saber pintar o cabelo",
      "item_2" : "Saber fazer laminagem",
      "item_1" : "Saber cortar o cabelo"
    } ],
    "address" : "Luanda, viana, grafanil",
    "responsibility" : "Cortar bem o cabelo",
    "description" : "Preciso de um barbeiro para cortar cabelo ao meu filho.",
    "id" : 1,
    "remuneration" : "2500",
    "title" : "Preciso de um barbeiro"
  }, {
    "image" : "biskato_photo.png",
    "requeriments" : [ {
      "item_3" : "Saber pintar o cabelo",
      "item_2" : "Saber fazer laminagem",
      "item_1" : "Saber cortar o cabelo"
    }, {
      "item_3" : "Saber pintar o cabelo",
      "item_2" : "Saber fazer laminagem",
      "item_1" : "Saber cortar o cabelo"
    } ],
    "address" : "Luanda, viana, grafanil",
    "responsibility" : "Cortar bem o cabelo",
    "description" : "Preciso de um barbeiro para cortar cabelo ao meu filho.",
    "id" : 1,
    "remuneration" : "2500",
    "title" : "Preciso de um barbeiro"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

