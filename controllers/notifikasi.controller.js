const { Notifikasi, Product, Penawaran } = require("../models");

class NotifController {
  static async getNotif (req, res, next) {
    try {
      const readNotif = await Notifikasi.findAll({
        where: {
          isClick: false,
        },
        // include: {
        //   model: User,
        //   attibutes: ["id", "email", "createdAt", "updatedAt"],
        // },
        include: {
            model: Product,
            attributes: ["id", "nama", "harga", "product_photos", "createdAt", "updatedAt"],
          },
        include: {
            model: Penawaran,
        }
      });

      await Notifikasi.update({
        isClick: true,
      })

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
}

module.exports = NotifController;
