export const connectHandler = () => {
  console.log('[Socket default event => connect] Socket connected');
};
export const connectErrorHandler = error => {
  console.log(
    '[Socket default event => connect_error] Socket connect error',
    error.message
  );
};
export const connectTimeoutHandler = timeout => {
  console.log(
    '[Socket default event => connect_timeout] Socket connection timeout',
    timeout
  );
};
export const errorHandler = error => {
  console.log('[Socket default event => error] Socket error', error.message);
};
export const disconnectHandler = reason => {
  console.log('[Socket default event => disconnect] Socket disconnect', reason);
};
export const reconnectHandler = attemptNumber => {
  console.log(
    '[Socket default event => reconnect] Socket succesfully reconnect after attempt number:',
    attemptNumber
  );
};
export const reconnectAttemptHandler = attemptNumber => {
  console.log(
    '[Socket default event => reconnect_attempt] Socket try reconnect, attempt number:',
    attemptNumber
  );
};
export const reconnectingHandler = attemptNumber => {
  console.log(
    '[Socket default event => reconnecting] Socket reconnecting, attempt number:',
    attemptNumber
  );
};
export const reconnectErrorHandler = error => {
  console.log(
    '[Socket default event => reconnect_error] Socket reconnect error',
    error.message
  );
};
export const reconnectFailHandler = () => {
  console.log(
    '[Socket default event => reconnect_failed] Socket reconnect_failed'
  );
};
export const ping = () => {
  console.log('[Socket default event => ping] Pinging to server');
};
export const pong = latency => {
  console.log(
    '[Socket default event => ping] Pong received, latency(ms)',
    latency
  );
};

export const newQueueHandler = msg => {
  console.log('[Socket event => newQueue]');
  console.log('msg', msg);
};
