CREATE DATABASE if NOT EXISTS trabajo_spa;
USE trabajo_spa;

CREATE TABLE tipodocumento(
	id INT AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(60),
	descripcion VARCHAR(100)
);

CREATE TABLE ciudad(
	id INT AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(60),
	descripcion VARCHAR(100)
);

CREATE TABLE persona(
	id INT AUTO_INCREMENT PRIMARY KEY,
	nombres VARCHAR(60),
	apellidos VARCHAR(60),
	idtipodocumento INT,
	documento INT,
	residencia INT,
	nacimiento DATE,
	email VARCHAR(100),
	telefono VARCHAR(60),
	usuario VARCHAR(60),
	PASSWORD VARCHAR(60)
);

/*create*/
delimiter $$
CREATE PROCEDURE crearpersona(
IN nombres VARCHAR(60),
IN	apellidos VARCHAR(60),
IN	idtipodocumento INT,
IN	documento INT,
IN	residencia INT,
IN	nacimiento DATE,
IN	email VARCHAR(100),
IN	telefono VARCHAR(60),
IN	usuario VARCHAR(60),
IN	clave VARCHAR(60) 
)
BEGIN 

INSERT INTO persona
(nombres,
	apellidos,
	idtipodocumento,
	documento ,
	residencia ,
	nacimiento ,
	email ,
	telefono,
	usuario,
	PASSWORD )
	VALUES(nombres,
	apellidos,
	idtipodocumento,
	documento ,
	residencia ,
	nacimiento ,
	email ,
	telefono,
	usuario,
	clave );
END
$$


delimiter $$
CREATE PROCEDURE updatepersona(
IN id_ INT,
IN name_ VARCHAR(60),
IN	nickname VARCHAR(60),
IN	tipo INT,
IN	doc INT,
IN	lugar INT,
IN	fecha DATE,
IN	correo VARCHAR(100),
IN	tel VARCHAR(60),
IN	usuari VARCHAR(60),
IN	clave VARCHAR(60) 
)
BEGIN 
UPDATE persona SET nombres= name_,
	apellidos = nickname,
	idtipodocumento = tipo,
	documento = doc ,
	residencia = lugar ,
	nacimiento = fecha,
	email = correo ,
	telefono = tel,
	usuario = usuari,
	PASSWORD =clave WHERE id=id_;
END
$$

delimiter $$
CREATE PROCEDURE GetPersonas ()
BEGIN
SELECT p.id,
	p.nombres,
	p.apellidos,
	td.nombre AS idtipodocumento,
	p.documento ,
	c.nombre AS residencia,
	DATE_FORMAT(p.nacimiento, "%Y-%m-%d" ) AS nacimiento,
	p.email ,
	p.telefono,
	p.usuario,
	p.PASSWORD AS clave  FROM persona p,tipodocumento td,ciudad c 
	WHERE p.idtipodocumento = td.id AND p.residencia=c.id;
END
$$

CALL GetPersonas

delimiter $$
CREATE PROCEDURE Getpersona(IN id INT)
BEGIN
SELECT p.id,
	p.nombres,
	p.apellidos,
	p.idtipodocumento,
	p.documento ,
	p.residencia,
	DATE_FORMAT(p.nacimiento, "%Y-%m-%d" ) AS nacimiento,
	p.email ,
	p.telefono,
	p.usuario,
	p.PASSWORD AS clave  FROM persona p,tipodocumento td,ciudad c 
	WHERE p.idtipodocumento = td.id AND p.residencia=c.id AND p.id=id;
END
$$

delimiter $$
CREATE PROCEDURE DeletePersona(IN _id_ INT)
BEGIN
DELETE FROM persona WHERE id=_id_;
END
$$



