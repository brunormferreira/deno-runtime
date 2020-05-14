import { serve } from "https://deno.land/std@0.50.0/http/server.ts";

const server = serve({ port: 8000 });


for await (const req of server) {
  console.log('Incoming request');
  req.respond({ body: 'Message from Deno!' });
}