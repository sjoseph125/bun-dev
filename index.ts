const server = Bun.serve({
    port: 5000,
    fetch(req) {
        return new Response("Hey Sam");        
    },
});

console.log(`Listening on localhost:${server.port}`);
