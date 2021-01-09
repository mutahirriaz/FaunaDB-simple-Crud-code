const faunadb = require('faunadb');
const q = faunadb.query;

require('dotenv').config();
(async () => {

    if (process.env.REACT_APP_FAUNADB_KEY) {

        const client = new faunadb.Client({ secret: process.env.REACT_APP_FAUNADB_KEY });



        try {
            // Create DataBase

            // const result = await client.query(
            //     q.CreateDatabase({name: "gatsbyapp"})
            // );
            // console.log("result", result);



            // create DataBase Manually

            // const result = await client.query(
            //     q.CreateKey({
            //         database: q.Database('gatsbyapp'),
            //         role: 'server', 
            //     })
            // );
            // console.log('result', result.secret)



            // create DataBase Collection

            // const result = await client.query(
            //     q.CreateCollection({ name: 'posts' })
            // )
            // console.log('result', result)



            // create Index for the DataBase Collection

            // const result = await client.query(
            //     q.CreateIndex({
            //         name: 'posts_by_title',
            //         source: q.Collection('posts'),
            //         terms: [{field: ['data', 'title'] }],
            //     })
            // )
            // console.log('result', result)



            // create document in the DataBase

            //  const result = await client.query(
            //     q.Create(
            //         q.Collection('posts'),
            //         { data: { 
            //             title: 'Serverless applications are scalable',
            //             age: 18 
            //         } },
            //       )
            //     );
            // console.log('result', result);



            // create Multiple document in DataBase

            // const result = await client.query(
            //     q.Map([
            //         'Gatsby.js generates static and dynamic websites',
            //         'FaunaDB is consistent',
            //         'Netlify deploys static assets on the Edge',
            //     ],
            //         q.Lambda(
            //             'post_title_val',
            //             q.Create(q.Collection("posts"), {data: { title: q.Var('post_title_val') }})
            //         )
            //     )
            // );
            // console.log('result', result);




            // get the Data from the DataBase with data key

            // const result = await client.query(
            //     q.Get(q.Ref(q.Collection('posts'), '287255958214673921'))
            // )
            // console.log('result', result);



            // get the Data from DataBase by Index

            // const result = await client.query(
            //     q.Get(q.Match(q.Index('posts_by_title'), 'FaunaDB is consistent'))
            // )
            // console.log('reult', result)



            // Update the data (Update will update the specific data)

            // const result = await client.query(
            //     q.Update(
            //         q.Ref(q.Collection('posts'), '287255958214674945'),
            //         {data: {content: 'This content iss used for faunadb',title: 'FaunaDB is updated'}}
            //     )
            // )
            // console.log('result', result);



            // Replace the data (Replace method will replace all the data )

            // const result = await client.query(
            //     q.Replace(
            //         q.Ref(q.Collection('posts'), '287255958214674945'),
            //         {data: {name: 'Mutahir', age: '20'}}
            //     )
            // )
            // console.log('result', result)



            // Delete the data

            // const result = await client.query(
            //     q.Delete(q.Ref(q.Collection('posts'), '287263483415759365'))
            // )
            // console.log('result', result);
            
        }
        catch (error) {
            console.log('error', error);
        }
    } else{
        console.log('No FAUNADB_SERVER_SECRET in .env file, skipping Document Retrival');
    }

})()





// if (process.env.FAUNADB_SERVER_SECRET) {
//     //console.log("Faunadb Server Secret: " + process.env.FAUNADB_SERVER_SECRET);

//     var client = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET });

//     //Retrive a document using index in the container of the database 
//     try {
//       var result = await client.query(
//         q.Get(
//             q.Match(q.Index('posts_by_title'), 'Serverless applications are scalable')
//           )
//       );
//       console.log("Document retrived from Container in Database: " + result.ref.id + " " + result.data.title);
//     } 
//     catch (error){
//         console.log('Error: ');
//         console.log(error);
//     }

//   } else {
//     console.log('No FAUNADB_SERVER_SECRET in .env file, skipping Document Retrival');
//   }

// })();
