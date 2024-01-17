var db = require('../config/db.config.js');
var globalFunctions = require('../config/global.functions.js');
var user = db.user;

exports.create = (req, res) => {
    user.create({
        username: req.body.username,
        // password: req.body.password,
        // email: req.body.email,
        // balance: req.body.balance
    }).then(object => {
        globalFunctions.sendResult(res, object);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    })
}
exports.test = (req, res) =>{
    globalFunctions.sendResult(res, "dick")
}
// Выбор всех записей о группах
exports.findAll = (req, res) => {
    user.findAll()
        .then(objects => {
            globalFunctions.sendResult(res, objects);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
};

// // Добавление группы
// exports.create = (req, res) => {
//     Student_group.create({
//         name: req.body.name
//     }).then(object => {
//         globalFunctions.sendResult(res, object);
//     }).catch(err => {
//         globalFunctions.sendError(res, err);
//     })
// };

// // Обновление данных группы по id
// exports.update = (req, res) => {
//     Student_group.findByPk(req.params.id)
//         .then(object => {
//             Student_group.update({
//                 name: req.body.name
//             },
//                 {
//                     where: {
//                         id: req.params.id
//                     }
//                 }
//             ).then(object => {
//                 globalFunctions.sendResult(res, object);
//             }).catch(err => {
//                 globalFunctions.sendError(res, err);
//             })
//         })
//         .catch(err => {
//             globalFunctions.sendError(res, err);
//         })
// };

// // Удаление группы по id
// exports.delete = (req, res) => {
//     Student_group.destroy({
//         where: {
//             id: req.params.id
//         }
//     }).then(() => {
//         globalFunctions.sendResult(res, 'Запись удалена');
//     }).catch(err => {
//         globalFunctions.sendError(res, err);
//     });
// };

// // Получение данных группы по id
// exports.findById = (req, res) => {
//     Student_group.findByPk(req.params.id)
//         .then(object => {
//             globalFunctions.sendResult(res, object);
//         })
//         .catch(err => {
//             globalFunctions.sendError(res, err);
//         })
// };