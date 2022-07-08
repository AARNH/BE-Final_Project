const {
  Notifikasi,
  Product,
  Penawaran,
  User
} = require("../models");

class NotifController {
  static async getNotif(req, res, next) {
    try {
      const readNotif = await Notifikasi.findAll({
        where: {
          isClick: false,
        },
        include: [ {
          model: User,
          attibutes: ["id", "email", "createdAt", "updatedAt"],
        },
        {
          model: Product,
          attributes: ["id", "nama", "harga", "product_photos", "createdAt", "updatedAt"],
        },
        {
          model: Penawaran,
        }]
      });

      {
        res.status(200).json({
          statusCode: "200",
          status: "Get Notification",
          message: "Successfully get notification",
          readNotif,
        });
      }
    } catch (err) {
      next(err);
    }
  }

  static async updateNotifbyId(req, res, next) {
    try {
      const notifUpdate = await Notifikasi.update({
        isClick: true,
      }, {
        where: {
          id: req.params.id
        }
      })
      res.status(200).json({
        statusCode: "200",
        status: "Update Notification",
        message: "Successfully update notification",
        notifUpdate,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = NotifController;