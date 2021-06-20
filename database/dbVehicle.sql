create database controlvehicle;

use controlvehicle;

create table vehicle(
	id int(6) unsigned auto_increment primary key, 
    marca varchar(20) not null,
    modelo varchar(20) not null,
    annum varchar(4) not null,
    placa varchar(15) not null,
    estado varchar(20) not null
);

show tables;

describe vehicle;

drop database controlvehicle;

