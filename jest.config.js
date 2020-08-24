module.exports = {
  projects: [
    {
      name: "components",
      setupFilesAfterEnv: ["./jest.setup.js"],
      testMatch: ["<rootDir>/**/*test.tsx"],
    },
  ],
}
