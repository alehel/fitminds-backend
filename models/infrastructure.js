module.exports = {
  uptimeInSeconds
};

function uptimeInSeconds() {
  return Math.floor(process.uptime());
}
