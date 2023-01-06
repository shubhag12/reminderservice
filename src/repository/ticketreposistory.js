const { NotificationTicket } = require("../models/index");
class TicketRepository {
  async getAllTickets() {
    try {
      const ticket = await NotificationTicket.findAll();
      return ticket;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = TicketRepository;
