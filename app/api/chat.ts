import { Pinecone } from '@pinecone-database/pinecone';
import * as Ably from 'ably';


const pc = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!,
});

const ably = new Ably.Realtime({ key: process.env.ABLY_API_KEY });
// Create a channel called 'get-started' and register a listener to subscribe to all messages with the name 'first'
  const channel = ably.channels.get("get-started")
   channel.subscribe("first", (message) => {
    console.log("Message received: " + message.data)
  });

  // Publish a message with the name 'first' and the contents 'Here is my first message!'
   channel.publish("first", "Here is my first message!")