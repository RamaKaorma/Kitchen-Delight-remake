import { defineField, defineType } from "sanity";

export const dish = defineType(
    {
        name: 'dish',
        title: 'Dish',
        type: 'document',
        fields: [defineField({
            name:'name',
            title:'Name',
            type:'string'
        }),
        defineField({
            name:'description',
            title:'Description',
            type:'string'
        }),
        defineField({
            name: 'imgUrl',
            title: 'ImageUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        }),
        defineField({
            name:'ingredients',
            title:'Ingredients',
            type:'array',
            of: [{
                name:'ingredient',
                title:'Ingredient',
                type:'string'
            }]
        }),
        defineField({
            name:'tags',
            title:'Tags',
            type:'array',
            of: [{
                name:'category',
                title:'Category',
                type:'string'
            }]
        })]
    }
)