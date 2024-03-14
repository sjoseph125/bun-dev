const server = Bun.serve({
   port: Bun.env.PORT || 8000,
    fetch(req) {
        return new Response("Hey Sam!!!");        
    },
});

console.log(`Listening on localhost:${server.port}`);
