module.exports = (sequelize, Sequelize) => {
    var User = sequelize.define(
        'user', // определяем имя таблицы
        {
            id: {
                type: Sequelize.INTEGER(10), // тип данных INTEGER
                autoIncrement: true, // включение автоматической нумерации
                primaryKey: true, // поле является первичным ключом
                allowNull: false // настройка allowNull со значением false запрещает запись в поле значений NULL (для поля с настройкой автоинкремента можно не указывать)
            },
            username: {
                type: Sequelize.STRING(150),
                allowNull: false
            },
            password: {
                type: Sequelize.STRING(150),
                allowNull: false
            },
            email: {
                type: Sequelize.STRING(150),
                allowNull: false
            },
            balance: {
                type: Sequelize.DOUBLE,
                allowNull: false
            }
        });

    // User.associate = (models) => {
    //     User.belongsTo(models.student_group, {
    //         foreignKey: 'student_group_id'
    //     });

    //     User.hasMany(models.project_user, {
    //         foreignKey: 'user_id',
    //         onDelete: 'CASCADE',
    //         onUpdate: 'CASCADE',
    //         sourceKey: 'id'
    //     });
    // };
    return User;
};