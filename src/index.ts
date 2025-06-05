process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

import WebSocket from 'ws';
import readline from 'readline';

const url = 'wss://ws-deposito-remoto-sucursales-back.canales-sbx.noprodcomafi.aws/?origin=DRS-SOFTWARE&scanner_id=ewee&draft_id=eeee';

const ws = new WebSocket(url);

ws.on('open', () => {
  console.log('Connected to WebSocket server. Type messages and press enter to send.');
});

ws.on('message', (data) => {
  console.log('Received:', data.toString());
});

ws.on('close', () => {
  console.log('Connection closed');
  process.exit(0);
});

ws.on('error', (err) => {
  console.error('WebSocket error:', err);
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  ws.send(input);
});
