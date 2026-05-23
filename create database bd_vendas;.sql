create database bd_vendas;
use bd_vendas;

create table tb_cliente(
cd_cliente int auto_increment primary key,
nm_empresa varchar(45) not null,
nr_contato char(11) not null,
nm_contato varchar(45) not null
);

create table tb_produto(
cd_produto int auto_increment primary key,
nm_produto varchar(45) not null,
vl_produto decimal (6,2) not null
);

create table tb_equipe(
cd_equipe int auto_increment primary key,
nm_equipe varchar(45) not null,
nm_regiao varchar(45) not null
);

create table tb_vendedor(
cd_vendedor int auto_increment primary key,
nm_vendedor varchar(45) not null,
nr_celular char(11) not null,       
fk_cd_equipe int not null,
foreign key(fk_cd_equipe) references tb_equipe(cd_equipe)
);

create table tb_venda(
cd_venda int auto_increment primary Key,
dt_venda date not null,
qt_venda int ,
vl_venda decimal(10,2),
fk_cd_vendedor int,
fk_cd_produto int,
fk_cd_cliente int,
foreign key(fk_cd_vendedor) references tb_vendedor(cd_vendedor),
foreign key(fk_cd_produto) references tb_produto(cd_produto),
foreign key(fk_cd_cliente) references tb_cliente(cd_cliente)
);


select * from tb_cliente;
select * from tb_produto;


INSERT INTO tb_produto VALUES (null,'camera','1000');
INSERT INTO tb_cliente VALUES (null,'pixelmemories','11958545875','Lucas');
INSERT INTO tb_equipe VALUES (null,'ti','São Paulo');
select * from tb_equipe;
insert into tb_vendedor VALUES (null, 'Jose Carlos','11545857548',1);