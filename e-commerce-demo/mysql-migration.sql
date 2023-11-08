CREATE TABLE roles (
    id BIGINT AUTO_INCREMENT AUTO_INCREMENT,
    CONSTRAINT PK_roles PRIMARY KEY (id),
    title VARCHAR(100) UNIQUE NOT NULL,
    deleted_at TIMESTAMP DEFAULT NULL,
    updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL
);
CREATE TABLE users (
    id BIGINT AUTO_INCREMENT,
    CONSTRAINT PK_users PRIMARY KEY (id),
    given_name VARCHAR(100) NOT NULL,
    surname VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    passwords VARCHAR(100) NOT NULL,
    role_id BIGINT,
    FOREIGN KEY (role_id) REFERENCES roles (id) ON DELETE CASCADE,
    deleted_at TIMESTAMP DEFAULT NULL,
    updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL
);
CREATE TABLE country (
    id BIGINT AUTO_INCREMENT,
    CONSTRAINT PK_country PRIMARY KEY (id),
    name VARCHAR(100) NOT NULL,
    official_name VARCHAR(100) UNIQUE NOT NULL,
    code VARCHAR(100) UNIQUE NOT NULL,
    deleted_at TIMESTAMP DEFAULT NULL,
    updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL
);
CREATE TABLE states (
    id BIGINT AUTO_INCREMENT,
    CONSTRAINT PK_state PRIMARY KEY (id),
    name VARCHAR(100) NOT NULL,
    country_id BIGINT,
    FOREIGN KEY (country_id) REFERENCES country (id) ON DELETE CASCADE,
    deleted_at TIMESTAMP DEFAULT NULL,
    updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL
);
CREATE TABLE city (
    id BIGINT AUTO_INCREMENT,
    CONSTRAINT PK_city PRIMARY KEY (id),
    name VARCHAR(100) NOT NULL,
    state_id BIGINT,
    FOREIGN KEY (state_id) REFERENCES states (id) ON DELETE CASCADE,
    deleted_at TIMESTAMP DEFAULT NULL,
    updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL
);
CREATE TABLE addresses (
    id BIGINT AUTO_INCREMENT,
    CONSTRAINT PK_addresses PRIMARY KEY (id),
    ext_number VARCHAR(100) NOT NULL,
    street VARCHAR(100) NOT NULL,
    int_number VARCHAR(100) DEFAULT '' NOT NULL,
    neighborhood VARCHAR(100) NOT NULL,
    zip_code VARCHAR(100) NOT NULL,
    city_id BIGINT,
    FOREIGN KEY (city_id) REFERENCES city (id) ON DELETE CASCADE,
    deleted_at TIMESTAMP DEFAULT NULL,
    updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL
);
CREATE TABLE payment (
    id BIGINT AUTO_INCREMENT,
    CONSTRAINT PK_payment PRIMARY KEY (id),
    holder_name VARCHAR(100) NOT NULL,
    card_number VARCHAR(100) NOT NULL,
    expiration VARCHAR(100) UNIQUE NOT NULL,
    cvv VARCHAR(100) NOT NULL,
    deleted_at TIMESTAMP DEFAULT NULL,
    updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL
);
CREATE TABLE user_address (
    user_id BIGINT,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    address_id BIGINT,
    FOREIGN KEY (address_id) REFERENCES addresses (id) ON DELETE CASCADE,
    deleted_at TIMESTAMP DEFAULT NULL,
    updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL
);
CREATE TABLE user_payment (
    user_id BIGINT,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    payment_id BIGINT,
    FOREIGN KEY (payment_id) REFERENCES payment (id) ON DELETE CASCADE,
    deleted_at TIMESTAMP DEFAULT NULL,
    updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL
);
CREATE TABLE category (
    id BIGINT AUTO_INCREMENT,
    CONSTRAINT PK_category PRIMARY KEY (id),
    title VARCHAR(100) UNIQUE NOT NULL,
    deleted_at TIMESTAMP DEFAULT NULL,
    updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL
);
CREATE TABLE product (
    id BIGINT AUTO_INCREMENT,
    CONSTRAINT PK_product PRIMARY KEY (id),
    name VARCHAR(100) UNIQUE NOT NULL,
    description VARCHAR(100) NOT NULL,
    image_url VARCHAR(100) NOT NULL,
    category_id BIGINT,
    FOREIGN KEY (category_id) REFERENCES category (id) ON DELETE CASCADE,
    stock BIGINT DEFAULT 0 NOT NULL,
    price DOUBLE PRECISION DEFAULT 0 NOT NULL,
    deleted_at TIMESTAMP DEFAULT NULL,
    updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL
);
CREATE TABLE order_status (
    id BIGINT AUTO_INCREMENT,
    CONSTRAINT PK_order_status PRIMARY KEY (id),
    title VARCHAR(100) UNIQUE NOT NULL,
    deleted_at TIMESTAMP DEFAULT NULL,
    updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL
);
CREATE TABLE orders (
    id BIGINT AUTO_INCREMENT,
    CONSTRAINT PK_orders PRIMARY KEY (id),
    customer_id BIGINT,
    FOREIGN KEY (customer_id) REFERENCES users (id) ON DELETE CASCADE,
    subtotal DOUBLE PRECISION DEFAULT 0 NOT NULL,
    shipping DOUBLE PRECISION DEFAULT 0 NOT NULL,
    taxes DOUBLE PRECISION DEFAULT 0 NOT NULL,
    address_id BIGINT,
    FOREIGN KEY (address_id) REFERENCES addresses (id) ON DELETE CASCADE,
    payment_id BIGINT,
    FOREIGN KEY (payment_id) REFERENCES payment (id) ON DELETE CASCADE,
    deleted_at TIMESTAMP DEFAULT NULL,
    updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL
);
CREATE TABLE order_statuses (
    order_id BIGINT,
    FOREIGN KEY (order_id) REFERENCES orders (id) ON DELETE CASCADE,
    status_id BIGINT,
    FOREIGN KEY (status_id) REFERENCES order_status (id) ON DELETE CASCADE,
    deleted_at TIMESTAMP DEFAULT NULL,
    updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL
);
CREATE TABLE order_product (
    id BIGINT AUTO_INCREMENT,
    CONSTRAINT PK_order_product PRIMARY KEY (id),
    order_id BIGINT,
    FOREIGN KEY (order_id) REFERENCES orders (id) ON DELETE CASCADE,
    product_id BIGINT,
    FOREIGN KEY (product_id) REFERENCES product (id) ON DELETE CASCADE,
    unit_price DOUBLE PRECISION DEFAULT 0 NOT NULL,
    product_count BIGINT DEFAULT 0 NOT NULL,
    deleted_at TIMESTAMP DEFAULT NULL,
    updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL
);
INSERT INTO roles (title)
VALUES ('Owner'),
    ('Admin'),
    ('Customer');
INSERT INTO users (given_name, surname, email, passwords, role_id)
VALUES (
        'Jani Selene',
        'Arenas Sanchez',
        'janisarsa@gmail.com',
        'secret',
        1
    ),
    (
        'Cecilia',
        'Canedo',
        'ceciliacanedolozada@gmail.com',
        'secret',
        2
    ),
    (
        'Gonzalo Andrei',
        'Malpica Santes',
        'gonzalo.andreims@gmail.com',
        'secret',
        2
    ),
    (
        'Brandon',
        'Jimenez Lozano',
        'brandon.jimenez.lozano.10@gmail.com',
        'secret',
        3
    ),
    (
        'Juan Francisco',
        'Llamas Castañeda',
        'francisco190696@gmail.com',
        'secret',
        3
    );
INSERT INTO country (name, official_name, code)
VALUES (
        'Mexico',
        'Estados Unidos Mexicanos',
        'MX'
    );
INSERT INTO states (name, country_id)
VALUES ('Aguascalientes', 1),
    ('Baja California', 1),
    ('Baja California Sur', 1),
    ('Campeche', 1),
    ('Chiapas', 1),
    ('Chihuahua', 1),
    ('Ciudad de México', 1),
    ('Coahuila', 1),
    ('Colima', 1),
    ('Durango', 1),
    ('Estado de México', 1),
    ('Guanajuato', 1),
    ('Guerrero', 1),
    ('Hidalgo', 1),
    ('Jalisco', 1),
    ('Michoacán', 1),
    ('Morelos', 1),
    ('Nayarit', 1),
    ('Nuevo León', 1),
    ('Oaxaca', 1),
    ('Puebla', 1),
    ('Querétaro', 1),
    ('Quintana Roo', 1),
    ('San Luis Potosí', 1),
    ('Sinaloa', 1),
    ('Sonora', 1),
    ('Tabasco', 1),
    ('Tamaulipas', 1),
    ('Tlaxcala', 1),
    ('Veracruz', 1),
    ('Yucatán', 1),
    ('Zacatecas', 1);
INSERT INTO city (name, state_id)
VALUES ('Mexicali', 2),
    ('Tijuana', 2),
    ('Ciudad Juárez', 6),
    ('El Oro de Hidalgo', 11),
    ('Gustavo A.Madero', 7),
    ('Miguel Hidalgo', 7);
INSERT INTO addresses (
        ext_number,
        street,
        int_number,
        neighborhood,
        zip_code,
        city_id
    )
VALUES (
        '1672',
        'Calle Paseo Villas Del Rosario Nte',
        '',
        'Villas del Rosario',
        '21297',
        1
    ),
    (
        '1271',
        'Av París',
        '3B',
        'Altamira',
        '22054',
        2
    ),
    (
        '6581',
        'C.Simona Barba',
        '',
        'Villa Hermosa',
        '32510',
        3
    ),
    (
        '8',
        'Abasolo',
        '',
        'Centro',
        '50600',
        4
    ),
    (
        '91',
        'Av.506',
        '2',
        'San Juan de Aragón I Secc',
        '07969',
        5
    ),
    (
        '152',
        'Herschel',
        'Piso 6',
        'Anzures',
        '11590',
        6
    );
INSERT INTO payment (holder_name, card_number, expiration, cvv)
VALUES (
        'JANI SELENE ARENAS SANCHEZ',
        '1234 5678 9012 3456',
        '12/29',
        '478'
    ),
    (
        'CECILIA CANEDO',
        '7890 1234 5678 9012',
        '09/27',
        '723'
    ),
    (
        'Brandon Jimenez Lozano',
        '1203 9751 4735 9121',
        '07/28',
        '924'
    ),
    (
        'GREGORIO ROSAS',
        '9876 1098 5432 8975',
        '01/26',
        '879'
    ),
    (
        'ARNULFO ANDRADE',
        '6428 9431 6870 1234',
        '03/25',
        '346'
    );
INSERT INTO user_address (user_id, address_id)
VALUES (1, 5),
    (1, 4),
    (2, 1),
    (4, 2),
    (5, 6);
INSERT INTO user_payment (user_id, payment_id)
VALUES (1, 1),
    (2, 2),
    (4, 3),
    (4, 4),
    (5, 5);
INSERT INTO category (title)
VALUES ('Ropa'),
    ('Amigurumis'),
    ('Accesorios');
INSERT INTO product (
        name,
        description,
        image_url,
        category_id,
        stock,
        price
    )
VALUES (
        'Amigurumi Freddie Mercury',
        'Amigurumi del cantante de Queen',
        '',
        2,
        20,
        1545.67
    ),
    (
        'Gorrito Minion',
        'Gorrito de Minion con la lengua de fuera',
        '',
        1,
        46,
        567.39
    ),
    (
        'Cobija de Mike Wazowski',
        'Una cobija de 1.5 x 1 metro',
        '',
        3,
        167,
        1567.39
    );
INSERT INTO order_status (title)
VALUES ('Placed'),
    ('Payment failed'),
    ('Payment successful'),
    ('Packaged'),
    ('Shipped'),
    ('On route'),
    ('Arrived'),
    ('Fulfilled');
INSERT INTO orders (customer_id, subtotal, shipping, taxes, address_id, payment_id)
VALUES (1, 7200, 360, 1152, 4, 1),
    (2, 9800, 490, 1568, 1, 1),
    (4, 3600, 180, 576, 2, 3),
    (4, 4150, 207.5, 664, 2, 4),
    (4, 960, 48, 153.6, 2, 3),
    (5, 1500, 75, 240, 6, 5),
    (5, 3100, 155, 496, 6, 5);
INSERT INTO order_statuses (order_id, status_id)
VALUES (1, 8),
    (2, 8),
    (4, 8),
    (4, 8),
    (4, 8),
    (5, 8),
    (5, 8);
INSERT INTO order_product (order_id, product_id, unit_price, product_count)
VALUES (1, 3, 1200, 6),
    (2, 3, 1400, 7),
    (3, 2, 450, 4),
    (4, 1, 1450, 1),
    (4, 3, 1350, 2),
    (5, 2, 480, 2),
    (6, 1, 1500, 1),
    (7, 1, 1550, 2);