# WebSocket Client

Simple TypeScript program to connect to a WebSocket server and send messages.

## Usage

Install dependencies:

```bash
npm install
```

Run the client:

```bash
npm start
```

The client connects to the following WebSocket URL:

```
wss://ws-deposito-remoto-sucursales-back.canales-sbx.noprodcomafi.aws/?origin=DRS-SOFTWARE&scanner_id=ewee&draft_id=eeee
```

After connection, type messages and press <kbd>Enter</kbd> to send. Incoming messages will be printed to the console.
