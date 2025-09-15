import { defineCollection, defineContentConfig } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: {
        include: "**/*",
        exclude: ["magic/**/*"],
      },
      schema: z.object({
        icon: z.string().optional(),
        label: z.string().optional(),
        layout: z.string().optional(),
        navigation: z
          .object({
            title: z.string().optional(),
          })
          .optional(),
        links: z
          .array(
            z.object({
              title: z.string(),
              href: z.string(),
              icon: z.string().optional(),
            })
          )
          .optional(),
      }),
    }),
    magic: defineCollection({
      type: "page",
      source: {
        include: "magic/**/*",
      },
      schema: z.object({
        icon: z.string().optional(),
        label: z.string().optional(),
        layout: z.string().optional(),
        navigation: z
          .object({
            title: z.string().optional(),
          })
          .optional(),
        links: z
          .array(
            z.object({
              title: z.string(),
              href: z.string(),
              icon: z.string().optional(),
            })
          )
          .optional(),
      }),
    }),
  },
});
