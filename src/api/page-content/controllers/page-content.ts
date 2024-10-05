/**
 * page-content controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::page-content.page-content",
  ({ strapi }) => ({
    async find(ctx) {
      const query = {
        ...ctx.query,
        populate: {
          reason_data: {
            populate: "*",
          },
        },
      };

      // Call the default Strapi entity service with the updated query
      const entities = await strapi.entityService.findMany(
        "api::page-content.page-content",
        query as any
      );

      return entities;
    },

    async findOne(ctx) {
      const { id } = ctx.params;
      const query = {
        ...ctx.query,
        populate: {
          reason_data: {
            populate: "*", // This will populate all fields in the reason_data component
          },
        },
      };

      // Call the default Strapi entity service with the updated query
      const entity = await strapi.entityService.findOne(
        "api::page-content.page-content",
        id,
        query as any
      );

      return entity;
    },
  })
);
