import { unique } from "next/dist/build/utils";
import type { CollectionConfig } from "payload";
import { relationship } from "payload/shared";

export const Categories = {
    slug: "categories",
    fields: [
        {
            name: "name",
            type: "text",
            required:true
        },
        {
            name: "slug",
            type: "text",
            required: true,
            unique: true,
            index:true
        },
        {
            name: "color",
            type: "text",
        },
        {
            name: "parent",
            type: "relationship",
            relationTo: "categories",
            hasMany:false,
        },
        {
            name: "subcategories",
            type: "join",
            collection: "categories",
            on: "parent",
            hasMany:true,
        },
    ]
}