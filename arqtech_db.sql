DROP DATABASE arqtech_bd;
CREATE DATABASE arqtech_bd;
USE arqtech_bd;

create table usuarios(
id_usuario int unsigned not null auto_increment,
nome varchar(150) not null,
email varchar(150) not null,
senha varchar (255) not null,
data_cadastro timestamp not null default current_timestamp,
primary key (id_usuario),
unique (email)
);

SELECT * FROM usuarios;