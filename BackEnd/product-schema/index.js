const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string
const uri =  
  "mongodb+srv://ashu:ashu@eval-databse.dxt6wcu.mongodb.net/";

const client = new MongoClient(uri);
                      
 async function run() {
    try {
        // Connect to the Atlas cluster
         await client.connect();

         // Get the database and collection on which to run the operation
         const db = client.db("gettingStarted");
         const col = db.collection("people");

         // Create new documents                                                                                                                                         
         const peopleDocuments = [
           {
             "name": { "Lloyd":"Grande" },
             "price": (30000), // May 23, 1912                                                                                                                                 
             "discount": ("20%"),  // May 7, 1954                                                                                                                                  
             "category": [ "AC" ]
           },
           {
            "name": {"Sony":"Bravia"},
            "price": (40000), // May 23, 1912                                                                                                                                 
            "discount": ("15%"),  // May 7, 1954                                                                                                                                  
            "category": [ "TV" ]
          },
         ]

         // Insert the documents into the specified collection        
         const p = await col.insertMany(peopleDocuments);

         // Find the document
         const filter = { "name.last": "Turing" };
         const document = await col.findOne(filter);

         // Print results
         console.log("Document found:\n" + JSON.stringify(document));

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

run().catch(console.dir);
