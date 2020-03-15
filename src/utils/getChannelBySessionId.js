export default sessionId => {
  const channelIndex = sessionId.indexOf('-');
  const channelId = sessionId.substring(0, channelIndex);
  return channelId;
};
