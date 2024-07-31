
CREATE USER 'fivem_user'@'%' IDENTIFIED WITH mysql_native_password BY 'fivem_password';
FLUSH PRIVILEGES;

ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'root_password';
FLUSH PRIVILEGES;




CREATE TABLE IF NOT EXISTS vehicles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    plate VARCHAR(10) NOT NULL UNIQUE,
    model VARCHAR(50) NOT NULL,
    color VARCHAR(30),
    customizations JSON,
    owner VARCHAR(50) NOT NULL
);




#INSERT INTO vehicles (plate, model, color, customizations, owner) VALUES
('ABC123', 'Carro1', 'Preto', '{"wheels": "sport"}', 'Player1'),
('XYZ789', 'Carro2', 'Vermelho', '{"wheels": "luxury"}', 'Player2');
