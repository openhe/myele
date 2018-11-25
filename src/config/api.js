import { get, post } from "./http.js";
import { getStore } from "./mUtil.js";

//根据类型查询城市
export const getCityByType = type =>
  get("/v1/cities", {
    type: type
  });

export const vipCart = (id, number, password) =>
  post("/member/v1/users/" + id + "/delivery_card/physical_card/bind", {
    number,
    password
  });

/**
 * 获取用户信息
 */
export const getUser = () =>
  get("/v1/user", {
    user_id: getStore("user_id")
  });
