DELETE FROM Users WHERE id IN (1,2,3);
INSERT INTO Users
    (id, name, email ,password, createdAt, updatedAt)
VALUES
    (1, 'Mathew', "mathew@hotmail.com", "$2b$10$.Ag5Bv2ae3if0HpcETKx2..eujfO9y/EgAvGwybM2WZNSF5rtmgs2", NOW(), NOW());
INSERT INTO Users
    (id, name, email ,password, createdAt, updatedAt)
VALUES
    (2, 'Sara', "saraM@hotmail.com", "sara987", NOW(), NOW());
INSERT INTO Users
    (id, name, email ,password, createdAt, updatedAt)
VALUES
    (3, 'Mike', "kitty@gmail.com", "kitty654", NOW(), NOW());


INSERT INTO Transactions
    (category, amount, createdAt, updatedAt, UserId)
VALUES
    ('grocery', 400, NOW(), NOW(), 1);
INSERT INTO Transactions
    (category, amount, createdAt, updatedAt, UserId)
VALUES
    ('utilities', 30, NOW(), NOW(), 1);
INSERT INTO Transactions
    (category, amount, createdAt, updatedAt, UserId)
VALUES
    ('restaurant', 50, NOW(), NOW(), 1);

INSERT INTO Transactions
    (category, amount, createdAt, updatedAt, UserId)
VALUES
    ('Education', 890, '2018-12-28 06:22:56' , NOW(), 4);
INSERT INTO Transactions
    (category, amount, createdAt, updatedAt, UserId)
VALUES
    ('Miscellaneous', 120, '2018-11-28 06:22:56' , NOW(), 4);
INSERT INTO Transactions
    (category, amount, createdAt, updatedAt, UserId)
VALUES
    ('Automotive', 320, '2018-10-28 06:22:56' , NOW(), 4);
INSERT INTO Transactions
    (category, amount, createdAt, updatedAt, UserId)
VALUES
    ('Entertainment', 123, '2019-05-28 06:22:56' , NOW(), 4);
INSERT INTO Transactions
    (category, amount, createdAt, updatedAt, UserId)
VALUES
    ('restaurant', 50, '2019-04-28 06:22:56' , NOW(), 4);
INSERT INTO Transactions
    (category, amount, createdAt, updatedAt, UserId)
VALUES
    ('Health', 300, '2019-03-28 06:22:56' , NOW(), 4);
INSERT INTO Transactions
    (category, amount, createdAt, updatedAt, UserId)
VALUES
    ('Utilities', 90, '2019-02-28 06:22:56' , NOW(), 4);
INSERT INTO Transactions
    (category, amount, createdAt, updatedAt, UserId)
VALUES
    ('housing', 790, '2019-01-28 06:22:56' , NOW(), 4);
INSERT INTO Transactions
    (category, amount, createdAt, updatedAt, UserId)
VALUES
    ('Education', 890, '2018-12-28 06:22:56' , NOW(), 4);
INSERT INTO Transactions
    (category, amount, createdAt, updatedAt, UserId)
VALUES
    ('Miscellanious', 120, '2018-11-28 06:22:56' , NOW(), 4);
INSERT INTO Transactions
    (category, amount, createdAt, updatedAt, UserId)
VALUES
    ('Automotive', 320, '2018-10-28 06:22:56' , NOW(), 4);