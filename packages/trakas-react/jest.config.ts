import configs from "../../jest.config";

configs.testEnvironment = "jest-environment-jsdom";

configs.setupFilesAfterEnv = ["<rootDir>/packages/trakas-react/setupTests.ts"];

export default configs;
