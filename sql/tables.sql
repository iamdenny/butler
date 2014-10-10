CREATE TABLE butler_modules_installed (
	idx				INTEGER PRIMARY KEY autoincrement,
	name 			VARCHAR(100),
	conn_type		VARCHAR(10), // bluetooth, wifi, xbee
	mac_address		VARCHAR(40), // mac address
	add				DATE,
	upd				DATE
);

CREATE TABLE butler_modules_sensor_data (
	idx 			INTEGER PRIMARY KEY autoincrement,
	m_name			VARCHAR(100),
	key 			VARCHAR(100),
	value_real		REAL,
	value_boolean	BOOLEAN,
	value_text		TEXT,  			
	add				DATE
);

CREATE TABLE butler_modules_sensors (
	idx 			INTEGER PRIMARY KEY autoincrement,
	m_name			VARCHAR(100),
	name    		VARCHAR(100),
	model 			VARCHAR(100),
	add				DATE	
);

CREATE TABLE butler_log (
);

CREATE TABLE butler_modules (
	idx				INTEGER PRIMARY KEY	autoincrement,
	name 			VARCHAR(100),
);
CREATE TABLE butler_modules_sensors (
	idx				INTEGER PRIMARY KEY	autoincrement,
	m_idx			INTEGER,
	key_name		VARCHAR(100),
	value_type		VARCHAR(10)
);
INSERT INTO butler_modules (name) VALUES ('DNY1001');
INSERT INTO butler_modules_sensors (m_idx, key_name, value_type) VALUES (1, 'temperature', 'real');
INSERT INTO butler_modules_sensors (m_idx, key_name, value_type) VALUES (1, 'humidity', 'real');
INSERT INTO butler_modules_sensors (m_idx, key_name, value_type) VALUES (1, 'light', 'real');
INSERT INTO butler_modules_sensors (m_idx, key_name, value_type) VALUES (1, 'dust', 'real');
INSERT INTO butler_modules_sensors (m_idx, key_name, value_type) VALUES (1, 'motion', 'boolean');
INSERT INTO butler_modules_sensors (m_idx, key_name, value_type) VALUES (1, 'ired', 'output');
INSERT INTO butler_modules_sensors (m_idx, key_name, value_type) VALUES (1, 'bluetooth', 'connect');