module.exports = async () => {
  return {
    verbose: true,
    rootDir: "./",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  };
};
