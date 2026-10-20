import api from "@/config/api";
import { Portfolio, TicketPayload } from "@/types";

export const getPortfolios = () => {
  return api.get<Portfolio[]>("portfolios/");
};

export const getPortfolioById = (id: number) => {
  return api.get<Portfolio>(`portfolios/${id}/`);
};

export const submitTicket = (data: TicketPayload) => {
  return api.post("tickets/", data);
};