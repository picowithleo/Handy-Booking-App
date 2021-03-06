import querystring from "querystring";
import axiosHandler from "./axiosHandler";

const API_TASK_URL = "/api/tasks";

/**
 * [Params]
 * - pagination: page, pageSize
 * - priceRange: minPrice, maxPrice
 * - search: keywords
 * - sort: field name
 */
export const reqGetAllTasks = (
  page = 1,
  pageSize = 10,
  minPrice = 5,
  maxPrice = 9999
) => {
  const stringField = querystring.stringify({
    page,
    pageSize,
    minPrice,
    maxPrice
  });
  const url = `${API_TASK_URL}?${stringField}`;

  return axiosHandler(url, "GET");
};
