'use server';

import { z } from 'zod';
import { formSchema } from '../validation';
import { auth } from '@/auth';
import slugify from 'slugify';
import { writeClient  } from '@/sanity/lib/write-client';



// export const handleFormSubmit = async (_prevState: any, formData: FormData) => {
//    console.log('Entered Function');
//   const pitch = formData.get('pitch') as string;

//   console.log(pitch);

//   const formValues = {
//     title: formData.get('title') as string,
//     description: formData.get('description') as string,
//     category: formData.get('category') as string,
//     link: formData.get('link') as string,
//     pitch,
//   };

//   try {
//     await formSchema.parseAsync(formValues);
//     console.log('✅ Valid form submission:', formValues);

//     // Save to DB here...

//     return {
//       status: 'SUCCESS',
//       error: '',
//     };
//   } catch (error) {
//     if (error instanceof z.ZodError) {
//       const fieldErrors = error.flatten().fieldErrors;
//       console.log(fieldErrors);
//       return {
//         status: 'ERROR',
//         error: 'Validation failed',
//         fieldErrors,
//       };
//     }

//     return {
//       status: 'ERROR',
//       error: 'Unexpected server error',
//     };
//   }
// };


export const createPitch = async(state: any, form: FormData, pitch: string)=>{

    const session=await auth();
    if(!session) return JSON.parse(JSON.stringify({ error: 'Not Signed in', status: 'ERROR'}));

    const { title, description, category, link} = Object.fromEntries(
        Array.from(form).filter(([key]) => key!='pitch'),
    )

    console.log("Category is: ", category);

    const slug = slugify(title as string, {lower: true, strict: true});

    try{

        const startup={
            title,
            description,
            Category: category,
            image:link,
            slug:{
                _type:slug,
                current: slug
            },

            author: {
                _type: 'reference',
                _ref: session?.id
            },

            pitch
        };

        const result = await writeClient.create({_type: 'startup', ...startup});
         return JSON.parse(JSON.stringify({...result, error:'', status:'SUCCESS'}));

    }catch(error){
        console.log(error);
        return JSON.parse(JSON.stringify({ error: JSON.stringify(error), status: 'ERROR'}));
    }
}


