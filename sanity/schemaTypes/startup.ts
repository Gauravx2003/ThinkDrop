import {defineType, defineField} from 'sanity';
import {UserIcon} from 'lucide-react'

export const startup = defineType({
    name:'startup',
    title: 'Startup',
    type: 'document',
    icon: UserIcon,
    
    fields:[
        defineField({
             name:'title',
             type:'string'
        }),
        defineField({
             name:'slug',
             type:'slug',
             options:{
                source: 'title'
             }
        }),
        defineField({
             name:'author',
             type:'reference',
             to:{type: 'author'}
        }),
        defineField({
             name:'description',
             type:'text'
        }),
         defineField({
             name:'views',
             type:'number'
        }),
         defineField({
             name:'Category',
             type:'string',
             validation: (Rule)=>Rule.min(1).max(20).required().error('Please enter a category'),
        }),
         defineField({
             name:'image',
             type:'url'
        }),
        defineField({
             name: 'pitch',
             type: 'markdown',
        }),
    ]
})