const { NotificationTicket } = require("../models/index");
const { Op } = require("sequelize");
class TicketRepository {
  async getAllTickets() {
    try {
      const ticket = await NotificationTicket.findAll();
      return ticket;
    } catch (error) {
      throw error;
    }
  }
  async update(ticketstatus,ticketid) {
    try {
        const ticket = await NotificationTicket.findByPk(ticketid);
        if(ticketstatus.status)
          ticket.status=ticketstatus.status
        await ticket.save();
      return ticket;
    } catch (error) {
      throw error;
    }
  }
  async get(filter) {
    try {
      const tickets = await NotificationTicket.findAll({
        where: {
          status: filter.status,
          notificationTime: {
            [Op.lte]: new Date(),
          },
        },
      });
      return tickets;
    } catch (error) {
      throw error;
    }
  }
  async create(data) {
    try {
      const ticket = await NotificationTicket.create(data);
      return ticket;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = TicketRepository;
