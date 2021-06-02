-- Mostar bases de datos
show databases;
-- Crear bases de datos
create database LuisDomAl;
-- Eliminar base de datos
drop database LuisDomAl;
-- Seleccionar DB
use LuisDomAl;
-- Mostar tablas
show tables;
-- Crear Tabla
create table sucursal(
     razonSocial VARCHAR(50),
     rfc CHAR(13) UNIQUE NOT NULL,
     nombre VARCHAR(50),
     ubicacion VARCHAR(80) NOT NULL,
     PRIMARY KEY(razonSocial)
 );
 create table empleado(
    rfc CHAR(13),
    nombre VARCHAR(100) NOT NULL,
    fechaNcto DATE NOT NULL,
    direccion VARCHAR(80) NOT NULL,
    tel CHAR(11),
    razonSocial VARCHAR(50),
    PRIMARY KEY(rfc),
    FOREIGN KEY(razonSocial) REFERENCES sucursal(razonSocial)
  );
  create table orden(
     idOrden INT,
     fecha DATE NOT NULL,
     total FLOAT NOT NULL,
     razonSocial VARCHAR(50) NOT NULL,
     rfc CHAR(13) NOT NULL,
     PRIMARY KEY(idOrden),
     FOREIGN KEY(razonSocial) REFERENCES sucursal(razonSocial),
     FOREIGN KEY(rfc) REFERENCES empleado(rfc)
     );
create table ingrediente(
     idIngrediente INT,
     nombre VARCHAR(40) NOT NULL,
     stock INT DEFAULT 1,
     PRIMARY KEY(idIngrediente)
    );
CREATE TABLE categoria(
     idCategoria INT,
     nombre VARCHAR(30) NOT NULL,
     PRIMARY KEY(idCategoria)
    );
CREATE TABLE platillo(
     idPlatillo INT,
     nombre VARCHAR(30) NOT NULL,
     costo FLOAT NOT NULL,
     idCategoria INT NOT NULL,
     PRIMARY KEY(idPlatillo),
     FOREIGN KEY(idCategoria) REFERENCES categoria(idCategoria)
    );
CREATE TABLE orden_platillo(
     cantidad INT NOT NULL,
     idOrden INT NOT NULL,
     idPlatillo INT NOT NULL,
     FOREIGN KEY(idOrden) REFERENCES orden(idOrden),
     FOREIGN KEY(idPlatillo) REFERENCES platillo(idPlatillo)
    );
CREATE TABLE platillo_ingrediente(
     idIngrediente INT NOT NULL,
     idPlatillo INT NOT NULL,
     FOREIGN KEY(idIngrediente) REFERENCES ingrediente(idIngrediente),
     FOREIGN KEY(idPlatillo) REFERENCES platillo(idPlatillo)
    );
-- Revisar estructura de tabla
desc sucursal;
desc empleado;
desc orden;
desc ingrediente;
desc categoria;
-- Eliminar Tabla
drop table sucursal;
-- Modificar Tabla
alter table empleado modify direccion varchar(80) NOT NULL;
-- Crear campo
alter table empleado add (sexo CHAR(1) NOT NULL);
-- Eliminar Campo
alter table empleado drop column sexo;
-- Insetar registro de forma no descriptiva
INSERT INTO sucursal VALUES ("El Taquito Feliz SA de CV", "TAF261020666", "Taco Feliz", "CDMX");
INSERT INTO empleado VALUES(
     "DEFL930301T43",
     "Daniel Ernesto FLores",
     "1993-03-01",
     "Bosque del Tesoro N.345 Col. Miguel Hidalgo, Ciudad de México, México CP.56070",
     "5510673492",
     "El Taquito Feliz SA de CV"
    );
-- Insetar registro de forma  descriptiva debemos ingresar los campos previamente, con este metodo podemos hacer de forma desordenada
INSERT INTO sucursal (
razonSocial, rfc, nombre, ubicacion) VALUES ("La Torta Feliz SA de CV", "TAF261020787", "Torta Feliz", "CDMX");
INSERT INTO sucursal (
rfc, razonSocial, ubicacion) VALUES ("TAF261020788", "La Torta Feliz 2 SA de CV", "CDMX");
-- Consultas
SELECT * from sucursal;
SELECT * from sucursal WHERE rfc = "TAF261020788";
SELECT * from sucursal WHERE razonSocial like "%CV";
SELECT * from sucursal WHERE razonSocial like "La%";
SELECT * from sucursal WHERE razonSocial like "%torta%";
SELECT * from sucursal WHERE razonSocial like "%CV" AND ubicacion = "CDMX";
-- Contar Registros
SELECT count(*) from sucursal where ubicacion = "CDMX";
-- Agregar Alias
SELECT count(*) as TotalSucursales from sucursal where ubicacion = "CDMX";
-- Eliminar Registros se recomienda primero consultar antes de borrar
SELECT * FROM sucursal where razonSocial like "%2%";
DELETE FROM sucursal where razonSocial like "%2%";
-- Actualizar registros
UPDATE sucursal set nombre = "Torta Feliz" where razonSocial like "%2%";
UPDATE sucursal set ubicacion = "GDL" where razonSocial like "%2%";