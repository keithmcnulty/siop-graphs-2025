              multiplex: {
          // Example values. To generate your own, see the socket.io server instructions.

          secret: "97486ae9da9caf1c491786cc3ddb4cb0",
          id: "cf80f1c5931557c12748d1babafbdf574acecf56c3ec319cc871a52f7af0b4c9",
          url: "https://siop-lec-2025-client.onrender.com", // Location of socket.io server
        },
        // Don't forget to add the dependencies
        // Don't forget to add the dependencies
        dependencies: [
          {
            src: "/socket.io/socket.io.js",
            async: true,
          },
          // { src: "/master.js", async: true },
          { src: "/client.js", async: true },
        ],